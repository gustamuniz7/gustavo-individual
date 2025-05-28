var dashboardModel = require("../models/dashboardModel");

function buscarUltimosAcertos(req, res) {
    dashboardModel.buscarUltimosAcertos(req.body.fkusuario)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarJogadores(req, res) {
    dashboardModel.buscarJogadores()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}



module.exports = {
    buscarUltimosAcertos,
    buscarJogadores
}
