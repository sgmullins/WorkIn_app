const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
	email: String,
	image: String
});
// User
// -email- string
// -password- string
// -username- string
// -profilePic - string
// -many posts - array of objects ref Post
// -many reviews - array of objects ref Review
UserSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', UserSchema);