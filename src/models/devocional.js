var database = require("../database/config");
function registrar(versiculo, reflexao, fkCategoria, fkUsuario) {
    var instrucao = `
        INSERT INTO devocional (versiculo_texto, reflexao, fk_categoria, fk_usuario)
        VALUES ('${versiculo}', '${reflexao}', ${fkCategoria}, ${fkUsuario});
    `;
    return database.executar(instrucao);
}

function buscarCards(idUsuario) {
    var instrucao = `
        SELECT 
            (SELECT COUNT(*) FROM devocionais WHERE fk_usuario = ${idUsuario}) as totalDevocionais,
            (SELECT sequencia_atual FROM streaks WHERE fk_usuario = ${idUsuario}) as sequencia
    `;
    return database.executar(instrucao);
}

function buscarDadosGraficos(idUsuario) {
    var instrucao = `
        SELECT c.nome as categoria, COUNT(d.id) as quantidade
        FROM devocionais d
        JOIN categorias c ON d.fk_categoria = c.id
        WHERE d.fk_usuario = ${idUsuario}
        GROUP BY c.nome;
    `;
    return database.executar(instrucao);
}

module.exports = { registrar, buscarDadosGraficos, buscarCards };