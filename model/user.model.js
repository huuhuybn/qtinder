const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
	avatar: String,
	name: String,
	phone: String
})

const User = mongoose.model('User', userSchema, 'user')

module.exports = User
