const appointmentCreateController = require('../controllers/appointmentCreateController');
const appointmentGetAllController = require('../controllers/appointmentGetAllController');
const appointmentGetOnePatientController = require('../controllers/appointmentGetOnePatientController');

const router = require('express').Router();

router.get('/', appointmentGetAllController.getAllAppointments);
router.get('/patient', appointmentGetOnePatientController.getOnePatientAppointments);
router.post('/', appointmentCreateController.createAppointment);

module.exports = router;