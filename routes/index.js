var express = require("express");
var router = express.Router();

/* Validations middleware*/
const indexValidation = require("../validations/indexValidation");

/* Controllers */
const { index ,indexPost,deleteColor} = require("../controllers/indexController");

/* GET home page. */
router.get("/", index);
router.post("/", indexValidation, indexPost);
router.post("/delcolor",deleteColor);

module.exports = router;
