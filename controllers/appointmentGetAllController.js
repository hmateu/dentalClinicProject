const { Appointment } = require("../models");
const appointmentGetAllController = {};

appointmentGetAllController.getAllAppointments = async (req,res) => {
    try {
        const appointments = await Appointment.findAll();
        return res.json(
            {
                success: true,
                message: "Citas recuperadas",
                data: appointments
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede mostrar ninguna cita",
                error: error.message
            }
        );
    }
}

module.exports = appointmentGetAllController;