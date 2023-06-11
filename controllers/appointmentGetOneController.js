const { Appointment } = require("../models");
const db = require("../models");
const sequelize = require("sequelize");
const appointmentGetOneController = {};

appointmentGetOneController.getOneAppointment = async (req,res) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await db.sequelize.query(`select a.date as fecha, a.price as precio, a.assessment as conclusion, ud.name as dentista, up.name as paciente, s.name as servicio, p.name as forma_de_pago from Appointments a left join Users ud on a.dentist = ud.id left join Users up on a.patient = up.id left join Services s on a.service = s.id left join Payments p on a.payment = p.id where a.id = ${appointmentId}`, { type: sequelize.QueryTypes.SELECT });

        const currentAppointment = await Appointment.findByPk(appointmentId);
        
        const patientId = req.userId;
        const appointmentPatient = currentAppointment.patient;

        // console.log("------------ ID por parametro de la consulta ------------",appointmentId,"-------------------------")
        // console.log("------------ Paciente de la consulta ------------",appointmentPatient,"-------------------------")

        if(patientId != appointmentPatient){
            return res.json(
                {
                    success: true,
                    message: "No tienes permisos para modificar esta consulta."
                }
            );
        }

        return res.json(
            {
                success: true,
                message: "Cita recuperada",
                data: appointment
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede mostrar la cita",
                error: error.message
            }
        )
    }
}

module.exports = appointmentGetOneController;