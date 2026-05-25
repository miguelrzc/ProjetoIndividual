var database = require("../database/config");

function registrar(versiculo, reflexao, fkCategoria, fkUsuario) {
    var instrucao = `
        INSERT INTO devocional (versiculo_texto, reflexao, fk_categoria, fk_usuario)
        VALUES ('${versiculo}', '${reflexao}', ${fkCategoria}, ${fkUsuario});
    `;
    return database.executar(instrucao);
}

function obterCards(idUsuario) {
    var instrucaoSql = `
        SELECT 
            (SELECT IFNULL(meta_total, 20) FROM metas WHERE fk_usuario = ${idUsuario} LIMIT 1) as meta_total,
            (SELECT COUNT(id) FROM devocional WHERE fk_usuario = ${idUsuario}) as totalDevocionais;
    `;
    return database.executar(instrucaoSql);
}

function buscarDadosGraficos(idUsuario) {
    var instrucao = `
        SELECT 
            c.id, 
            c.nome as categoria, 
            IFNULL(COUNT(d.id), 0) as quantidade
        FROM categorias c
        LEFT JOIN devocional d ON c.id = d.fk_categoria AND d.fk_usuario = ${idUsuario}
        GROUP BY c.id, c.nome
        ORDER BY c.id;
    `;
    return database.executar(instrucao);
}

function obterTodosDevocionais(idUsuario) {
    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(d.data_registro, '%d/%m/%Y') as data_formatada,
            d.versiculo_texto,
            d.reflexao,
            c.nome as categoria_nome
        FROM devocional d
        JOIN categorias c ON d.fk_categoria = c.id
        WHERE d.fk_usuario = ${idUsuario}
        ORDER BY d.data_registro DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = { 
    registrar, 
    buscarDadosGraficos, 
    obterTodosDevocionais, 
    obterCards 
};