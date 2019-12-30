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
}