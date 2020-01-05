const mongoose = require('mongoose');
mongoose.Schema.Types.Boolean.convertToFalse.add('off');
const Schema = mongoose.Schema;

const WorkspotSchema = new Schema({
	name: String,
	type: String,
	description: String,
	wifi: String,
	outlet: String,
	parking: String,
	food: String,
	alcohol: String,
	openLate: String,
	images: [{ url: String, public_id: String }],
	location: String,
	lat: Number,
	lng: Number,
	addedBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: 'Review'
	}]
});

module.exports = mongoose.model('Workspot', WorkspotSchema);

