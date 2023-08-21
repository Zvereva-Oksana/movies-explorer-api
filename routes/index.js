const router = require('express').Router();
const { signinValidation, signupValidation } = require('../middlewares/validation');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');
const NotFoundError = require('../errors/not-found-err');

router.post('/signin', signinValidation, login);
router.post('/signup', signupValidation, createUser);
router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
