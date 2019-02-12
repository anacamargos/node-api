const mongoose = require('mongoose');

const product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        //proxima linha só é executada dps q ele conseguir buscar os registros no banco de dados
        const products = await product.find();

        return res.json(products);
    },

    async store (req, res) {
        //Criação
    }
}