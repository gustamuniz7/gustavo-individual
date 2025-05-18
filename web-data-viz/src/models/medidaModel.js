var database = require("../database/config");

function buscarUltimasMedidas(acertos, erros) {

    var instrucaoSql = `SELECT 
        acertos as respostas certas, 
        erros as respostas erradas,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM resposta
                    WHERE fkpergunta = ${acertos}
                    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(acertos) {

    var instrucaoSql = `SELECT 
        acertos as respostas certas, 
        erros as respostas erradas,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM resposta
                    WHERE fkpergunta = ${acertos}
                    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
