const router = require('express').Router();
const auth = require('../middlewares/verifyToken');
const userDeleteController = require('../controllers/userDeleteController');
const userGetAllController = require('../controllers/userGetAllController');
const userGetOneController = require('../controllers/userGetOneController');
const userUpdateController = require('../controllers/userUpdateController');
const isAdmin = require('../middlewares/isAdmin');
const isDentist = require('../middlewares/isDentist');

router.get('/', auth, isDentist, userGetAllController.getAllUsers);
// router.get('/:id', auth, userGetOneController.getOneUser);
router.get('/perfil', auth, userGetOneController.getOneUser);
router.put('/', auth, userUpdateController.updateUser);
router.delete('/:id', auth, isAdmin, userDeleteController.deleteUser);

module.exports = router;