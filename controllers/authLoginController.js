const { User } = require('../models');
const jwt = require('jsonwebtoken');
const authLoginController = {};

authLoginController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );

        if (!user) {
            return res.json(
                {
                    success: true,
                    message: "Usuario incorrecto"
                }
            )
        }

        //Validamos password
        const userPassword = password;

        // if (!password || !email) {
        //     return res.json(
        //         {
        //             success: true,
        //             message: "No dejes campos vacíos"
        //         }
        //     )
        // }

        const token = jwt.sign(
            {
                userId: user.id,
                roleId: user.role,
                email: user.email
            },
            'secreto',
            {
                expiresIn: '3h'
            }
        );

        if (user.password == password) {
            return res.json(
                {
                    success: true,
                    message: "Usuario logueado",
                    token: token
                }
            );
        }
        return res.json(
            {
                success: true,
                message: "Contraseña incorrecta"
            }
        );

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No puedes loguearte",
                error: error
            }
        )
    }
}
module.exports = authLoginController;