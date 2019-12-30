const Workspot = require('../models/workspot');

module.exports = {
	//Workspot index
	async getWorkspots(req, res, next) {
		let workspots = await Workspot.find({});
		res.render('workspots/index', { workspots })
	},
	//New workspot
	newWorkspot(req, res, next) {
		res.render('workspots/new');
	},
	//Create workspot
	async createWorkspot(req, res, next) {
		//use req.body to create a new workspot
		let workspot = await Workspot.create(req.body);
		res.redirect(`/workspots/${workspot.id}`);
	},
	//Show workspot
	async showWorkspot(req, res, next) {
		let workspot = await Workspot.findById(req.params.id);
		res.render('workspots/show', { workspot });
	},
}