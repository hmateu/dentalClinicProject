const appointmentCreateController = require('../controllers/appointmentCreateController');
const appointmentGetAllController = require('../controllers/appointmentGetAllController');
const appointmentGetOneDentistController = require('../controllers/appointmentGetOneDentistController');
const appointmentGetOnePatientController = require('../controllers/appointmentGetOnePatientController');

const router = require('express').Router();

router.get('/', appointmentGetAllController.getAllAppointments);
router.get('/patient', appointmentGetOnePatientController.getOnePatientAppointments);
router.get('/dentist', appointmentGetOneDentistController.getOneDentistAppointments);
router.post('/', appointmentCreateController.createAppointment);

module.exports = router;