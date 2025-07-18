const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
  location: String,
});

module.exports = mongoose.model('Campground', campgroundSchema);