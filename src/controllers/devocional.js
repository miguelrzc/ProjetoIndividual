var devocionalModel = require("../models/devocional");

function registrar(req, res) {
    var versiculo = req.body.versiculoServer;
    var reflexao = req.body.reflexaoServer;
    var fkCategoria = req.body.categoriaServer;
    var fkUsuario = req.body.usuarioServer;

  if (versiculo == undefined) {
    res.status(400).send("O Versículo está indefinida!");
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

    devocionalModel.buscarCards(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { registrar, buscarDadosGraficos, buscarCards };


  
