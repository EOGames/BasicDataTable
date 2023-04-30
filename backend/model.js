// const {mongoose } = require('mongoose');
const moongoose = require('mongoose');

moongoose.connect('mongodb://localhost:27017/superDatabase');

const schema = new moongoose.Schema(
    {
        name: String,
        email: String,
        phone: Number
    }
)

module.exports.users = moongoose.model('users',schema);