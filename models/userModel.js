'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
	email: {
		type: String,
		required: true
	},
	ssn: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	eth_address: {
		type: String,
		required: true
	},
	eth_private_key: {
		type: String,
		required: true
	}
}, {collection: 'users'});

module.exports = mongoose.model('User' , User, 'users');
