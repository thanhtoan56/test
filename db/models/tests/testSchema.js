const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    username: { type: String},
    email: {type: String}
})

const Tests = mongoose.model('tests', testSchema)

module.exports = { Tests };