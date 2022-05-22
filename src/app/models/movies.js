const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = new Schema({
    name: {type: String},
    description: {type: String},
    date: {type: String},
    rate: {type: String},
    image: {type: String}
})
module.exports = mongoose.model('Movie', Movie);