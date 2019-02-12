const mongoose = require('mongoose');

const product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        //proxima linha só é executada dps q ele conseguir buscar os registros no banco de dados
        const products = await product.find();

        return res.json(products);
    },

    async store (req, res) {
        const newProduct = await product.create(req.body);
        return res.json(newProduct);
    },

    async show (req,res) {
        const thisProduct = await product.findById(req.params.id);
        return res.json(thisProduct);
    },

    async update (req, res) {
        const  thisProduct = await product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(thisProduct);
    },

    async destroy (req, res) {
        await product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}