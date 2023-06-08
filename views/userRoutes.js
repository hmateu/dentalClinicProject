const router = require('express').Router();
const userGetAllController = require('../controllers/userGetAllController');
const userGetOneController = require('../controllers/userGetOneController');
const userUpdateController = require('../controllers/userUpdateController');

router.get('/', userGetAllController.getAllUsers);
router.get('/:id', userGetOneController.getOneUser);
router.put('/:id', userUpdateController.updateUser);

module.exports = router;