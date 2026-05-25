var devocionalModel = require("../models/devocional");

function registrar(req, res) {
    var versiculo = req.body.versiculoServer;
    var reflexao = req.body.reflexaoServer;
    var fkCategoria = req.body.categoriaServer;
    var fkUsuario = req.body.usuarioServer;

  if (versiculo == undefined) {
    res.status(400).send("O Versículo está indefinido!");
  } else if (fkUsuario == undefined) {
    res.status(400).send("Sua senha está indefinida!");
} else { 
        devocionalModel.registrar(versiculo, reflexao, fkCategoria, fkUsuario)
            .then(resultado => res.json(resultado))
            .catch(erro => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function buscarDadosGraficos(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.buscarDadosGraficos(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarCards(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.obterCards(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterTodosDevocionais(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("Buscando todos os devocionais do usuário no Controller, ID:", idUsuario);

    devocionalModel.obterTodosDevocionais(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os devocionais: ", erro.sqlMessage);
            res.status(500).json(erro.core);
        });
}

module.exports = { registrar, buscarDadosGraficos, buscarCards, obterTodosDevocionais };


  
