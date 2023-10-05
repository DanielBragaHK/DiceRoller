const express = require("express");
const rolagens = require("./controladores/rolagens");

const rotas = express();

rotas.get("/dados", rolagens.rolarDados);

rotas.get("/historico", rolagens.mostrarHistorico);


module.exports = rotas;