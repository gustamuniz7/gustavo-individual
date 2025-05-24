var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/enderecoAqui", function (req, res) {
    dashboardController.buscarUltimosAcertos(req, res);
});

module.exports = router;
