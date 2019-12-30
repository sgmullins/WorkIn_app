const Workspot = require('../models/workspot');

module.exports = {
	async getWorkspots(req, res, next) {
		let workspots = await Workspot.find({});
		res.render('workspots/index', { workspots })
	}
}