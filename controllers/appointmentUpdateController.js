const { Appointment } = require('../models')
const appointmentUpdateController = {}

appointmentUpdateController.updateAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await Appointment.findByPk(appointmentId);

        if (!appointment) {
            return res.json(
                {
                    success: true,
                    message: "La cita no existe"
                }
            );
        };

        const { date, price, assessment, dentist, patient, service, payment } = req.body;

        const appointmentUpdated = await Appointment.update(
            {
                date, price, assessment, dentist, patient, service, payment
            },
            {
                where: {
                    id: appointmentId
                }
            }
        )

        return res.json({
            success: true,
            message: "Cita modificada",
            data: appointment
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede actualizar la cita seleccionada",
                error: error
            }
        )
    }
}

module.exports = appointmentUpdateController;