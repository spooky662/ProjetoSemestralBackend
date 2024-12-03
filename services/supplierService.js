// ./services/supplierServices.js
const auth = require('../auth');
const db = require('../models');

class SupplierService {
    constructor(SupplierModel) {
        this.Supplier = SupplierModel;
    }

    async create(name, email, CNPJ) {
        try {
            const newSupplier = await this.Supplier.create({
                name: name,
                email: email,
                CNPJ: CNPJ
            });
            return newSupplier ? newSupplier : null;
        }
        catch (error) {
            throw error;
        }
    }

    //Metodo para retornar todos os fornecedores
    async findAllSuppliers() {
        try {
            const AllSuppliers = await this.Supplier.findAll();
            return AllSuppliers ? AllSuppliers : null;
        }
        catch (error) {
            throw error;
        }
    }

    //Metodo para retornar o produto pela id
    async findSupplierById(id) {
        try {
            const Supplier = await this.Supplier.findByPK(id);
            return Supplier ? Supplier : null;
        }
        catch (error) {
            throw error;
        }
    }
    
}

module.exports = SupplierService;