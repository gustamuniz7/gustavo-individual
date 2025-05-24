
var database = require("../database/config");

function buscarUltimosAcertos() {

    var instrucaoSql = `select corretas from quiz;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimosAcertos
};
