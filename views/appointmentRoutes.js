const appointmentCreateController = require('../controllers/appointmentCreateController');
const appointmentDeleteController = require('../controllers/appointmentDeleteController');
const appointmentGetAllController = require('../controllers/appointmentGetAllController');
const appointmentGetNumberOneDentist = require('../controllers/appointmentGetNumberOneDentist');
const appointmentGetNumberOnePatient = require('../controllers/appointmentGetNumberOnePatient');
const appointmentGetOneController = require('../controllers/appointmentGetOneController');
const appointmentGetOneDentistController = require('../controllers/appointmentGetOneDentistController');
const appointmentGetOnePatientController = require('../controllers/appointmentGetOnePatientController');
const appointmentUpdateController = require('../controllers/appointmentUpdateController');
const isDentist = require('../middlewares/isDentist');
const auth = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/', auth, isDentist, appointmentGetAllController.getAllAppointments);
router.get('/patient', auth, appointmentGetOnePatientController.getOnePatientAppointments);
router.get('/dentist', auth, isDentist, appointmentGetOneDentistController.getOneDentistAppointments);
router.get('/best-dentist', auth, isDentist, appointmentGetNumberOneDentist.getNumberOneDentist);
router.get('/best-patient', auth, isDentist, appointmentGetNumberOnePatient.getNumberOnePatient);
router.get('/:id', auth, appointmentGetOneController.getOneAppointment);
router.post('/', auth, appointmentCreateController.createAppointment);
router.put('/:id', auth, appointmentUpdateController.updateAppointment);
router.delete('/:id', auth, appointmentDeleteController.deleteAppointment);

module.exports = router;