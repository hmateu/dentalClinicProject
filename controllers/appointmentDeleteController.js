const { Appointment } = require("../models");

const appointmentDeleteController = {};

appointmentDeleteController.deleteAppointment = async (req,res) => {
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy({
            where: {
                id:appointmentId
            }
        });
        return res.json({
            success: true,
            message: "Cita eliminada",
            data: deleteAppointment
        });
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "La cita no se ha podido eliminar",
                error: error
            }
        )
    }
}

module.exports = appointmentDeleteController;