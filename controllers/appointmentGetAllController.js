const { Appointment } = require("../models");
const db = require("../models");
const sequelize = require("sequelize");
const appointmentGetAllController = {};

appointmentGetAllController.getAllAppointments = async (req,res) => {
    try {
        const appointments = await db.sequelize.query('select a.date as fecha, a.price as precio, a.assessment as conclusion, ud.name as dentista, up.name as paciente, s.name as servicio, p.name as forma_de_pago from Appointments a left join Users ud on a.dentist = ud.id left join Users up on a.patient = up.id left join Services s on a.service = s.id left join Payments p on a.payment = p.id', { type: sequelize.QueryTypes.SELECT });
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