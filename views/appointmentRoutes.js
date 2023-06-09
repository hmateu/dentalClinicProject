const appointmentCreateController = require('../controllers/appointmentCreateController');
const appointmentDeleteController = require('../controllers/appointmentDeleteController');
const appointmentGetAllController = require('../controllers/appointmentGetAllController');
const appointmentGetOneDentistController = require('../controllers/appointmentGetOneDentistController');
const appointmentGetOnePatientController = require('../controllers/appointmentGetOnePatientController');
const appointmentUpdateController = require('../controllers/appointmentUpdateController');

const router = require('express').Router();

router.get('/', appointmentGetAllController.getAllAppointments);
router.get('/patient', appointmentGetOnePatientController.getOnePatientAppointments);
router.get('/dentist', appointmentGetOneDentistController.getOneDentistAppointments);
router.post('/', appointmentCreateController.createAppointment);
router.put('/:id', appointmentUpdateController.updateAppointment);
router.delete('/:id', appointmentDeleteController.deleteAppointment);

module.exports = router;