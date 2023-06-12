const { Appointment } = require("../models");
const db = require("../models");
const sequelize = require("sequelize");
const appointmentGetNumberOnePatient = {};

appointmentGetNumberOnePatient.getNumberOnePatient = async (req,res) => {
    try {
        const appointments = await db.sequelize.query('select a.date AS fecha, a.price AS precio, a.assessment AS conclusion, ud.name AS dentista, up.name AS paciente, s.name AS servicio, p.name AS forma_de_pago from Appointments a left join Users ud on ud.id = a.dentist left join Users up on up.id = a.patient left join Services s on s.id = a.service left join Payments p on p.id = a.payment where a.patient = (select patient from (select patient, count(*) as citas from Appointments group by patient order by citas desc limit 1)as query)', { type: sequelize.QueryTypes.SELECT });
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

module.exports = appointmentGetNumberOnePatient;