const Workspot = require('../models/workspot');

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
		console.log(req.body);
		let workspot = await Workspot.create(req.body.workspot);
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
		let workspot = await Workspot.findByIdAndUpdate(req.params.id, req.body.workspot, { new: true });
		res.redirect(`/workspots/${workspot.id}`);
		console.log(req.body);
	}
}