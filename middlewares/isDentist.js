const isDentist = (req, res, next) => {
    try {
        if (req.roleId == 2 || req.roleId == 1) {
            next();
            return;
        }
        return res.json({
            success: true,
            message: "No eres un usuario válido para esta petición"
        });
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

module.exports = isDentist;