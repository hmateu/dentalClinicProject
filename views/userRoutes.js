const router = require('express').Router();
const userGetAllController = require('../controllers/userGetAllController');
const userGetOneController = require('../controllers/userGetOneController');

router.get('/', userGetAllController.getAllUsers);
router.get('/:id', userGetOneController.getOneUser);

module.exports = router;