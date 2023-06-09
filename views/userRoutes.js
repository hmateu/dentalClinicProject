const router = require('express').Router();
const auth = require('../middlewares/verifyToken');
const userDeleteController = require('../controllers/userDeleteController');
const userGetAllController = require('../controllers/userGetAllController');
const userGetOneController = require('../controllers/userGetOneController');
const userUpdateController = require('../controllers/userUpdateController');

router.get('/',auth, userGetAllController.getAllUsers);
router.get('/:id', userGetOneController.getOneUser);
router.put('/:id', userUpdateController.updateUser);
router.delete('/:id', userDeleteController.deleteUser);

module.exports = router;