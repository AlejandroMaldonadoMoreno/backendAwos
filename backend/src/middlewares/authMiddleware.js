const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: "Acceso denegado. No hay token." });
    }

    try {
        const tokenLimpio = token.startsWith("Bearer ")
            ? token.replace("Bearer ", "")
            : token;
        const decoded = jwt.verify(tokenLimpio, process.env.JWT_SECRET);

        req.usuario = decoded;

        next();
    } catch (error) {
        console.error("Error de JWT:", error.message);
        res.status(401).json({ msg: "Token no válido o expirado." });
    }
};