const appointmentCreateController = require('../controllers/appointmentCreateController');
const appointmentDeleteController = require('../controllers/appointmentDeleteController');
const appointmentGetAllController = require('../controllers/appointmentGetAllController');
const appointmentGetOneController = require('../controllers/appointmentGetOneController');
const appointmentGetOneDentistController = require('../controllers/appointmentGetOneDentistController');
const appointmentGetOnePatientController = require('../controllers/appointmentGetOnePatientController');
const appointmentUpdateController = require('../controllers/appointmentUpdateController');
const isDentist = require('../middlewares/isDentist');
const auth = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/', appointmentGetAllController.getAllAppointments);
router.get('/patient', appointmentGetOnePatientController.getOnePatientAppointments);
router.get('/dentist', appointmentGetOneDentistController.getOneDentistAppointments);
router.post('/', appointmentCreateController.createAppointment);
router.put('/:id', appointmentUpdateController.updateAppointment);
router.delete('/:id', appointmentDeleteController.deleteAppointment);

module.exports = router;