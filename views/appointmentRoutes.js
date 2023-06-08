const appointmentCreateController = require('../controllers/appointmentCreateController');
const appointmentGetAllController = require('../controllers/appointmentGetAllController');

const router = require('express').Router();

router.get('/', appointmentGetAllController.getAllAppointments);
router.post('/', appointmentCreateController.createAppointment);

module.exports = router;