const router = require('express').Router();
const authRegisterController = require('../controllers/authRegisterController');
const authLoginController = require('../controllers/authLoginController');

router.post('/register', authRegisterController.register);
router.post('/login', authLoginController.login);

module.exports = router;