var devocionalModel = require("../models/devocional");

function registrar(req, res) {
    var versiculo = req.body.versiculoServer;
    var reflexao = req.body.reflexaoServer;
    var categoriaText = req.body.categoriaServer; 
    var fkUsuario = req.body.usuarioServer;

    if (versiculo == undefined) {
        res.status(400).send("O Versículo está indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O ID do Usuário está indefinido!");
    } else { 
        devocionalModel.registrar(versiculo, reflexao, categoriaText, fkUsuario)
            .then(resultado => res.json(resultado))
            .catch(erro => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function obterDadosGrafico(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.buscarDadosGrafico(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterCards(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.buscarCards(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterTodosDevocionais(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("Buscando todos os devocionais do usuário no Controller, ID:", idUsuario);

    devocionalModel.buscarListaCompleta(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { 
    registrar, 
    obterDadosGrafico, 
    obterCards, 
    obterTodosDevocionais 
};