
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
    	type: String,
    	required: true,
    	unique: true
    } ,
    name: {
    	type: String,
    	required: true
    } ,
    city: {
    	type: String,
    	required: true
    },
    lang: {
    	type: String,
    	required: true
    },
    lat: {
    	type: String,
    	required: true
    },
    info: {
    	type: String,
    	required: true
    },
    image: {
    	type: String,
    	required: true
    }
});

module.exports = mongoose.model('user', userSchema);