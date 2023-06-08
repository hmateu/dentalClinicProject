const appointmentCreateController = require('../controllers/appointmentCreateController');

const router = require('express').Router();

router.post('/', appointmentCreateController.createAppointment);

module.exports = router;