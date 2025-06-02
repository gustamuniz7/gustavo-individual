var database = require("../database/config");

function guardarResultado(corretas, fkUsuario) {
    // 1. Inserir os acertos na tabela quiz
    let sqlQuiz = `INSERT INTO quiz (corretas) VALUES (${corretas})`;

    return database.executar(sqlQuiz).then(function (resultadoQuiz) {
        let idTentativa = resultadoQuiz.insertId;

        // 2. Inserir o relacionamento na tabela associativa
        let sqlRegistro = `
            INSERT INTO registro_usuario (fkTentativa, fkUsuario)
            VALUES (${idTentativa}, ${fkUsuario})
        `;

        return database.executar(sqlRegistro);
    });
}
module.exports = {guardarResultado}
