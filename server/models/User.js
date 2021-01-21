// import mongoose and bcrypt
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import movie schema
const movieSchema = require('./Movie');

// create user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    // object containing the info on the added movies
    addedMovies: [movieSchema]
  },
  {
    toJson: {
      virtuals: true
    }
  }
);

// hash and create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password and validate
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// 
userSchema.virtual('movieCount').get(function () {
  return this.addedMovies.length;
});

const User = model('User', userSchema);

module.exports = User;
