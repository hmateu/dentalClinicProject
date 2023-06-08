const { User } = require("../models");

const userDeleteController = {};

userDeleteController.deleteUser = async (req,res) => {
    try {
        const userId = req.params.id;

        const deleteUser = await User.destroy({
            where: {
                id:userId
            }
        });
        return res.json({
            success: true,
            message: "Usuario eliminado",
            data: deleteUser
        });
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Usuario no se ha podido eliminar",
                error: error
            }
        )
    }
}

module.exports = userDeleteController;