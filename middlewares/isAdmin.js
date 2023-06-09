const isAdmin = (req, res, next) => {
    try {
        if (req.roleId !== 1) {
            return res.json({
                success: true,
                message: "No tienes permisos para relizar esta acción"
            });
        }

        next();
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No tienes permisos",
                error: error.message
            }
        )
    }
}

module.exports = isAdmin;