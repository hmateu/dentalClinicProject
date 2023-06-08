const { User } = require('../models');

const authRegisterController = {};

authRegisterController.register = async (req,res) => {
    try {

        const { dni, name, surname, password, age, mobile, email, location, collegial, role, speciality } = req.body;

        const newUser = await User.create(
            {
                dni: dni,
                name: name,
                surname, password, age, mobile, email, location, collegial, role, speciality
            }
        );
        return res.send(newUser);
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede registrar el usuario",
                error: error.message
            }
        )
    }
}

module.exports = authRegisterController;