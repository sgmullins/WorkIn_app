require('dotenv').config();
const Workspot = require('../models/workspot');
const { checkReqBody } = require('../middleware/workspot');
const googleMapsClient = require('@google/maps').createClient({
	key: process.env.GOOGLEMAPS_API_KEY,
	Promise: Promise
});
const cloudinary = require('cloudinary');
cloudinary.config({
	cloud_name: 'gearswap',
	api_key: '692592224443913',
	api_secret: process.env.CLOUDINARY_SECRET
});

module.exports = {
	//Workspot index
	async workspotIndex(req, res, next) {
		let workspots = await Workspot.find({});
		res.render('workspots/index', { workspots })
	},

	//New workspot
	workspotNew(req, res, next) {
		res.render('workspots/new');
	},

	//Create workspot
	async workspotCreate(req, res, next) {
		//use req.body to create a new workspot

		req.body.workspot.images = [];
		for (const file of req.files) {
			let image = await cloudinary.v2.uploader.upload(file.path); //file.path is a multer method
			req.body.workspot.images.push({
				url: image.secure_url,
				public_id: image.public_id
			});
		}
		//google map coding
		let response = await googleMapsClient
			.geocode({
				address: req.body.workspot.location
			})
			.asPromise();
		req.body.workspot.lat = response.json.results[0].geometry.location.lat;
		req.body.workspot.lng = response.json.results[0].geometry.location.lng;

		//check req body for checkbox/radio button attributes
		await checkReqBody(req);

		let workspot = await Workspot.create(req.body.workspot);
		console.log(workspot);
		res.redirect(`/workspots/${workspot.id}`);
	},

	//Show workspot
	async workspotShow(req, res, next) {
		let workspot = await Workspot.findById(req.params.id);
		res.render('workspots/show', { workspot });
	},

	//Edit workspot
	async workspotEdit(req, res, next) {
		let workspot = await Workspot.findById(req.params.id);
		res.render('workspots/edit', { workspot })
	},

	//Workspot Update
	async workspotUpdate(req, res, next) {
		let workspot = await Workspot.findById(req.params.id);//find workspot by id
		if (req.body.deleteImages && req.body.deleteImages.length) {//check if images from deletion from edit form
			let deleteImages = req.body.deleteImages;//assign deleteImages from req.body to own var
			for (const public_id of deleteImages) {//loop over deleteImages
				await cloudinary.v2.uploader.destroy(public_id);//delete method from cloudinary
				for (const image of workspot.images) {//loop and delete from images array workspot.images
					if (image.public_id === public_id) {
						let index = workspot.images.indexOf(image);
						workspot.images.splice(index, 1);
					}
				}
			}
		}
		if (req.files) {
			for (const file of req.files) {
				let image = await cloudinary.v2.uploader.upload(file.path); //file.path is a multer method
				workspot.images.push({
					url: image.secure_url,
					public_id: image.public_id
				});
			}
		}
		//Check if location was updated
		if(req.body.workspot.location !== workspot.location){
			//google map coding
			let response = await googleMapsClient
			.geocode({
				address: req.body.workspot.location
			})
			.asPromise();
			workspot.lat = response.json.results[0].geometry.location.lat;
			workspot.lng = response.json.results[0].geometry.location.lng;
			workspot.location = req.body.workspot.location;
		}
		
		//check req body for checkbox/radio button attributes
		await checkReqBody(req);

		//Reassign workspot values
		workspot.name = req.body.workspot.name;
		workspot.type = req.body.workspot.type;
		workspot.description = req.body.workspot.description;
		workspot.wifi = req.body.workspot.wifi;
		workspot.outlet = req.body.workspot.outlet;
		workspot.parking = req.body.workspot.parking;
		workspot.food = req.body.workspot.food;
		workspot.alcohol = req.body.workspot.alcohol;
		workspot.openLate = req.body.workspot.openLate;

		workspot.save();

		res.redirect(`/workspots/${workspot.id}`);
		console.log(req.body);
	},
	
	//Workspot Destroy
	async workspotDestroy(req, res, next) {
		let workspot = await Workspot.findById(req.params.id);
		for (const image of workspot.images) {
			await cloudinary.v2.uploader.destroy(image.public_id)
		}
		await workspot.remove();
		res.redirect("/workspots");
	}
}