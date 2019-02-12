const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json);

//Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true});

//require('./src/models/product'); foi substituido por:
requireDir('./src/models');

//const product = mongoose.model('Product');


//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);