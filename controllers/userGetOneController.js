const { User } = require('../models')
const userGetOneController = {}

userGetOneController.getOneUser =  async(req, res) => {
    try {
        // const userId = req.params.id;
        const userId = req.userId;
        const user = await User.findByPk(userId);

        return res.json({
            success: true,
            message: "Usuario recuperado",
            data: user
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se pueden recuperar el usuario seleccionado",
                error: error
            }
        )    
    }
}

module.exports = userGetOneController;