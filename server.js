const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true});

//require('./src/models/product'); foi substituido por:
requireDir('./src/models');

//const product = mongoose.model('Product');


//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);