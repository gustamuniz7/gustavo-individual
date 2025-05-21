var database = require("../database/config");

function guardarResultado(fkusuario, corretas){
    let comandosql = `insert into quiz(fkusuario, corretas) values (${fkusuario}, ${corretas})`;
    return database.executar(comandosql)
}
module.exports = {guardarResultado}
