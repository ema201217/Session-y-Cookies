const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    res.render("index", {
      rememberColor: req.cookies.colorRemember,
    });
  },

  indexPost: (req, res) => {
    const errores = validationResult(req);
    console.log(errores);
    if (errores.isEmpty()) {
      req.body.colorRemember == "on" &&
        res.cookie("colorRemember", req.body.colores, {
          expires: new Date(Date.now() + 90000),
          httpOnly: true,
        });

      res.render("otherView", {
        info: req.body,
        color: `color:${req.body.colores.value}`,
        rememberColor: `color:${req.cookies.colorRemember}`,
      });
    } else {
      res.render("index", {
        errores: errores.mapped(),
      });
    }
  },
  deleteColor: (req, res) => {
    res.cookie("colorRemember", "", { maxAge: -1 });
    res.redirect("/")
  },
};
