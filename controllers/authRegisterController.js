const { User } = require('../models');
const bcrypt = require('bcrypt');

const authRegisterController = {};

authRegisterController.register = async (req,res) => {
    try {

        const { dni, name, surname, password, age, mobile, email, location } = req.body;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(email);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        const isValidPassword = passwordRegex.test(password);

        if(!isValidEmail){
            return res.json(
                {
                    success: true,
                    message: "Email no válido"
                }
            )
        }
        if(!isValidPassword){
            return res.json(
                {
                    success: true,
                    message: "Contraseña no válida. Debe tener al menos una letra mayúscula. Debe tener al menos una letra minúscula. Debe tener al menos un número. Debe tener al menos un símbolo (puedes ajustar los símbolos permitidos según tus necesidades). Debe tener una longitud mínima de 8 caracteres. Debe tener una longitud máxima de 15 caracteres."
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