// import mongoose
const { Schema } = require('mongoose');

// Create schema for added movies under the User model
const movieSchema = new Schema({
  _id: false,
  movieId: {
    type: Number,
    required: true,
    unique: true
  },
  posterPath: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
});

module.exports = movieSchema;