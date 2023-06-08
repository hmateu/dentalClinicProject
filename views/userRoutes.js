const router = require('express').Router();
const userDeleteController = require('../controllers/userDeleteController');
const userGetAllController = require('../controllers/userGetAllController');
const userGetOneController = require('../controllers/userGetOneController');
const userUpdateController = require('../controllers/userUpdateController');

router.get('/', userGetAllController.getAllUsers);
router.get('/:id', userGetOneController.getOneUser);
router.put('/:id', userUpdateController.updateUser);
router.delete('/:id', userDeleteController.deleteUser);

module.exports = router;