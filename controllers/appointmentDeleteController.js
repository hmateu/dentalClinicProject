const { Appointment } = require("../models");

const appointmentDeleteController = {};

appointmentDeleteController.deleteAppointment = async (req,res) => {
    try {
        const appointmentId = req.params.id;
        const appointment = await Appointment.findByPk(appointmentId);

        // console.log("---------------",req.userId,"---------------")
        // console.log("--------Patient Appointment-------",appointment.patient,"---------------")

        const patientId = req.userId;
        const appointmentPatient = appointment.patient;
        if(patientId != appointmentPatient){
            return res.json(
                {
                    success: true,
                    message: "No tienes permisos para modificar esta consulta."
                }
            );
        }

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