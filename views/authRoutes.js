const router = require('express').Router();
const authRegisterController = require('../controllers/authRegisterController');

router.post('/register', authRegisterController.register);

module.exports = router;