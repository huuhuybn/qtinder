const mongoose = require('mongoose')

const memberSchema  = new mongoose.Schema({
    email: String,
    password: String,
    avatar: String,
    fullName: String,
    birthday: String,
    sex: String,
    phone: String,
    job: String,
    description: String
})

const Member = mongoose.model('Member', memberSchema, 'member')

module.exports = Member
