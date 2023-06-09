const router = require('express').Router();
const auth = require('../middlewares/verifyToken');
const userDeleteController = require('../controllers/userDeleteController');
const userGetAllController = require('../controllers/userGetAllController');
const userGetOneController = require('../controllers/userGetOneController');
const userUpdateController = require('../controllers/userUpdateController');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', auth, userGetAllController.getAllUsers);
router.get('/:id', auth, userGetOneController.getOneUser);
router.put('/:id', auth, userUpdateController.updateUser);
router.delete('/:id', auth, isAdmin, userDeleteController.deleteUser);

module.exports = router;