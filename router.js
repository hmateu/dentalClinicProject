const router = require('express').Router();

const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);

module.exports = router;