const router = require('express').Router();
const userGetAllController = require('../controllers/userGetAllController');

router.get('/', userGetAllController.getAllUsers);

module.exports = router;