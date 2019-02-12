const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true});

//require('./src/models/product'); foi substituido por:
requireDir('./src/models');

const product = mongoose.model('Product');


//Primeira rota
app.get('/', (req, res) => {

    product.create({
        title: 'React Native',
        description: 'Build native apps with React Native',
        url: 'http://github.com/facebook/react-native'
    });

    console.log("Oi");

    res.send("Hello World");
})

app.listen(3001);