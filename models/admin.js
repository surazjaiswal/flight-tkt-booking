var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var adminSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
});

adminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("admin", adminSchema);