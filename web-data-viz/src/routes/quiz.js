var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");
router.post("/quiz", function (req, res){
    quizController.resultadoQuiz(req, res)
} )

module.exports = router;