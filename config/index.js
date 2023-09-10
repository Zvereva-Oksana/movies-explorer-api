const rateLimit = require('express-rate-limit');

const URL_MONGO_DEV = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const { NODE_ENV, JWT_SECRET, URL_MONGO } = process.env;
const urlMongo = NODE_ENV === 'production' ? URL_MONGO : URL_MONGO_DEV;
const jwtSecret = NODE_ENV === 'production' && JWT_SECRET ? JWT_SECRET : 'secret';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = {
  jwtSecret, limiter, urlMongo,
};
