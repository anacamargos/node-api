const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {

    product.create({
        title: 'React Native',
        description: 'Build native apps with React Native',
        url: 'http://github.com/facebook/react-native'
    });

    

    res.send("Hello World");
})

module.exports = routes;