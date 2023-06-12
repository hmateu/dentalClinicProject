const { User } = require('../models');
const bcrypt = require('bcrypt');

const authRegisterController = {};

authRegisterController.register = async (req,res) => {
    try {

        const { dni, name, surname, password, age, mobile, email, location } = req.body;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(email);

        if(!isValidEmail){
            return res.json(
                {
                    success: true,
                    message: "Email no válido"
                }
            )
        }

        const newPassword = bcrypt.hashSync(password,8);

        const newUser = await User.create(
            {
                dni, name, surname,
                password: newPassword,
                age, mobile, email, location,
                collegial: null,
                speciality: null,
                role: 4
            }
        );
        return res.json(
            {
                success: true,
                message: "Usuario registrado correctamente"
            }
        )
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