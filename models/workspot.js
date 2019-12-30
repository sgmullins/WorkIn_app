const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkspotSchema = new Schema({
	name: String,
	type: String,
	description: String,
	wifi: String,
	features: [{
		outlet: String,
		parking: String,
		food: Boolean,
		alcohol: Boolean,
		openLate: Boolean
	}],
	images: [String],
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

