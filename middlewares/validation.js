const { celebrate, Segments, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const { regexName, regexEmail, regexUrl } = require('../utils/constant');

const signinValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().regex(regexEmail),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30).regex(regexName),
  }).unknown(true),
});

const signupValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30).regex(regexName),
    email: Joi.string().required().regex(regexEmail),
    password: Joi.string().required(),
  }).unknown(true),
});

const meIdValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.objectId().required(),
  }).unknown(true),
});

const updateUserValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().regex(regexEmail),
    name: Joi.string().min(2).max(30).regex(regexName),
  }),
});

const movieValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().regex(regexUrl).required(),
    trailerLink: Joi.string().regex(regexUrl).required(),
    thumbnail: Joi.string().regex(regexUrl).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }).unknown(true),
});

const movieIdValidation = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    _id: Joi.objectId().required(),
  }).unknown(true),
});

module.exports = {
  signinValidation,
  signupValidation,
  meIdValidation,
  updateUserValidation,
  movieValidation,
  movieIdValidation,
};
