const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { regexName, regexEmail } = require('../utils/constant');
const UnauthorizedError = require('../errors/unauthorized-err');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    match: regexEmail,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    match: regexName,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError('Неправильные почта или пароль.'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError('Неправильные почта или пароль.'));
          }
          return user;
        });
    });
};
mongoose.model('user', userSchema).createIndexes();
module.exports = mongoose.model('user', userSchema);
