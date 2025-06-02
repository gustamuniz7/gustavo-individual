var database = require("../database/config");

function buscarUltimosAcertos(fkusuario) {

    var instrucaoSql = `
SELECT q.corretas
FROM quiz q
JOIN registro_usuario r ON q.idTentativa = r.fkTentativa
WHERE r.fkUsuario = ${fkusuario};
`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarJogadores() {

    var instrucaoSql = `select jogador,COUNT(jogador) as total from usuario group by jogador;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimosAcertos,
    buscarJogadores
};
