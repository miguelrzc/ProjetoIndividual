var express = require("express");
var router = express.Router();
var devocionalController = require("../controllers/devocional");

router.post("/registrar", function (req, res) {
    devocionalController.registrar(req, res);
});

router.get("/dashboard/:idUsuario", function (req, res) {
    devocionalController.obterDadosGrafico(req, res);
});

router.get("/cards/:idUsuario", function (req, res) {
    devocionalController.obterCards(req, res);
});

router.get("/lista-completa/:idUsuario", function (req, res) {
    devocionalController.obterTodosDevocionais(req, res);
});

module.exports = router;