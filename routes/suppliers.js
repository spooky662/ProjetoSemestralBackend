var express = require('express');
var router = express.Router();
const auth = require('../auth'); //Carregar os objetos do auth.js

//implementar as dependencias para o funcionamento da classe Supplier
const db = require('../models'); // carregando o db

//Carregando as classes service e controller da product
const SupplierService = require('../services/supplierService');
const SupplierController = require('../controllers/supplierController');

//Construi os objetos a partir das classes
const supplierService = new SupplierService(db.Supplier);
const supplierController = new SupplierController(supplierService);

/* GET suppliers listing. */
router.get('/', function (req, res, next) {
    res.send('Modulo de fornecedores rodando.');
});

//Rota para registrar novo fornecedor
router.post('/newSupplier', auth.verifyToken, async (req, res) => {
    supplierController.createSupplier(req, res);
});

//Rota para retornar todos os fornecedores
router.get('/allSuppliers', auth.verifyToken, async (req, res) => {
    supplierController.findAllSuppliers(req, res);
})

//Rota para retornar um fornecedor pelo id
router.get('/getSupplierById', auth.verifyToken, async (req, res) => {
    supplierController.findSupplierById(req, res);
})

module.exports = router;