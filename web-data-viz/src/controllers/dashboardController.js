var dashboardModel = require("../models/dashboardModel");

function buscarUltimosAcertos(req, res) {
    dashboardModel.buscarUltimosAcertos(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarUltimosAcertos
}
