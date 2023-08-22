const router = require('express').Router();

const { updateUser, getCurrentUser } = require('../controllers/users');
const { updateUserValidation } = require('../middlewares/validation');

router.get('/me', getCurrentUser);
router.patch('/me', updateUserValidation, updateUser);

module.exports = router;
