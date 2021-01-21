// import model and authentication necessities
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user.id })
          .select('__v -password')
          .populate('addedMovies')
        return foundUser;
      }
      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const newUser = await User.create(args);
      const token = signToken(user);

      return { token, newUser };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addMovie: async (parent, { movie }, context) => {
      if (context.user) {
        const updatedMovies = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { addedMovies: movie }},
          { new: true, runValidators: true }
        );
        return updatedMovies;
      }

      throw new AuthenticationError('You must be logged in');
    },
    removeMovie: async (parent, { movieId }, context) => {
      if (context.user) {
        const updatedMovies = await User.findByIdAndUpdate(
          { _id: context.user.id },
          { $pull: { addedMovies: { movieId: movieId } } },
          { new: true }
        );
        return updatedMovies;
      }

      throw new AuthenticationError('You must be logged in');
    }
  }
}

module.exports = resolvers;