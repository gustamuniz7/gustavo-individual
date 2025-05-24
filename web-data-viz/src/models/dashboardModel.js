
var database = require("../database/config");

function buscarUltimosAcertos(fkusuario) {

    var instrucaoSql = `select corretas from quiz where fkusuario = ${fkusuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimosAcertos
};
