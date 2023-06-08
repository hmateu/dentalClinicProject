const { Appointment } = require("../models");
const appointmentCreateController = {};

appointmentCreateController.createAppointment = async (req, res) => {
    try {
        const { date, price, assessment, dentist, patient, service, payment } = req.body;
        const newAppointment = Appointment.create({
            date, price, assessment, dentist, patient, service, payment
        });
        return res.json(
            {
                success: true,
                message: "Cita creada",
                data: newAppointment
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede crear la cita",
                error: error.message
            }
        );
    }
}

module.exports = appointmentCreateController;