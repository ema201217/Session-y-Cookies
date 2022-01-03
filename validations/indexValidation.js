const {check} = require("express-validator")

module.exports = [
check("nombre")
.notEmpty()
.withMessage("Ingresa un nombre").bail()
.isAlpha()
.withMessage("Ingrese un nombre valido"),

check("colores")
.notEmpty()
.withMessage("Elige un colores"),

check("email")
.notEmpty()
.withMessage("Ingresa un email").bail()
.isEmail()
.withMessage("Ingresa un email valido"),

check("edad")
.isNumeric()
.withMessage("Ingresa un valor numerico")
]
