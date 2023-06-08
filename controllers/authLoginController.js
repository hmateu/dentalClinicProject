const { User } = require('../models');

const authLoginController = {};

authLoginController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

         //Validamos password
         const userPassword = password;
        
         if (!password || !email) {
             return res.json(
                 {
                     success: true,
                     message: "No dejes campos vacíos"
                 }
             )
         } 

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

       

        if(user.password == password){
            return res.json(
                {
                    success: true,
                    message: "Usuario logueado"
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