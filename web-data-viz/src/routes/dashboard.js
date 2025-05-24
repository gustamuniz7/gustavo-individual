var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/buscarUltimosAcertos", function (req, res) {
    dashboardController.buscarUltimosAcertos(req, res);
});

module.exports = router;
