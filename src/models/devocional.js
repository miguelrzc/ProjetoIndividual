var database = require("../database/config");

function registrar(versiculo, reflexao, categoriaText, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO devocional (versiculo_texto, reflexao, categoria, fk_usuario) 
        VALUES ('${versiculo}', '${reflexao}', '${categoriaText}', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}

function buscarDadosGrafico(idUsuario) {
    var instrucaoSql = `
        SELECT categoria, COUNT(id) AS quantidade 
        FROM devocional 
        WHERE fk_usuario = ${idUsuario}
        GROUP BY categoria;
    `;
    return database.executar(instrucaoSql);
}

function buscarCards(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(id) AS totalDevocionais 
        FROM devocional 
        WHERE fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function buscarListaCompleta(idUsuario) {
    var instrucaoSql = `
        SELECT DATE_FORMAT(data_registro, '%d/%m/%Y') AS data_formatada,
               categoria, versiculo_texto, reflexao
        FROM devocional
        WHERE fk_usuario = ${idUsuario}
        ORDER BY data_registro DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    buscarDadosGrafico,
    buscarCards,
    buscarListaCompleta
};