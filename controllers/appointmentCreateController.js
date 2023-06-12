const { Appointment, User, Service } = require("../models");
const appointmentCreateController = {};

appointmentCreateController.createAppointment = async (req, res) => {
    try {
        const patient = req.userId;
        const { date, assessment, dentist, service, payment } = req.body;

        const currentService = await Service.findOne({
            where: {
                id: service
            }
        });

        const rolcurrentDentist = await User.findOne({
            where: {
                id: dentist,
                role: 2
            }
        });

        if (!rolcurrentDentist) {
            res.statusCode = 400;
            throw new Error("No es un dentista válido");
        }

        const newAppointment = await Appointment.create({
            date,
            price: currentService.price,
            assessment, dentist,
            patient: patient,
            service, payment
        });

        return res.json(
            {
                success: true,
                message: "Cita creada",
                data: newAppointment
            }
        )
    } catch (error) {
        let statusCode;
        res.statusCode === 200 ? statusCode = 500 : statusCode = res.statusCode;
        return res.status(statusCode).json(
            {
                success: false,
                message: "No se puede crear la cita",
                error: error.message
            }
        );
    }
}

module.exports = appointmentCreateController;