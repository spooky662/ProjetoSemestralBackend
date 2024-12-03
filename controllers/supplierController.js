// ./controllers/supplierController.js

class SupplierController {
    constructor(SupplierService) {
        this.supplierService = SupplierService;
    }
    
    async createSupplier(req, res) {
        // Cria o fornecedor
        const { name, email, CNPJ } = req.body;
        try {
            const newSupplier = await this.supplierService.create(name, email, CNPJ);
            res.status(200).json(newSupplier);
        }
        catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao gravar o novo fornecedor' });
        }
    }

    async findAllSuppliers(req, res) {
        try {
            const AllSuppliers = await this.supplierService.findAll();
            res.status(200).json(AllSuppliers);
        }
        catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao localizar todos os fornecedores' });
        }
    }

    async findSupplierById(req, res) {
        const { id } = req.query;
        try {
            const Supplier = await this.supplierService.findSupplierById(id);
            res.status(200).json(Supplier);
        }
        catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao localizar o fornecedor pelo id' });
        }
    }

}

module.exports = SupplierController;