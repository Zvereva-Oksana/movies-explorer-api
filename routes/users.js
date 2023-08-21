const router = require('express').Router();

const { updateUser, getCurrentUser } = require('../controllers/users');
const { meIdValidation, updateUserValidation } = require('../middlewares/validation');

router.get('/me', meIdValidation, getCurrentUser);
router.patch('/me', updateUserValidation, updateUser);

module.exports = router;
