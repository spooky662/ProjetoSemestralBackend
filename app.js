var express = require('express'); // instanciar express, para as rotas
var path = require('path'); // gerenciar caminhos
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// Importando o Sequelize e o modelo User
var sequelize = require('./models').sequelize;
// var User = require('./models/user')(sequelize);

// Configuração das associações
// User.associate({ Cart, CartItems });
// Cart.associate({ User, Product });
// CartItems.associate({ Cart, Product });

var indexRouter = require('./routes/index'); // base das rotas
var usersRouter = require('./routes/users'); // para as rotas users
var productRouter = require('./routes/products') // para as rotas products
var cartRouter = require('./routes/carts'); // para as rotas cart
var transactionRouter = require('./routes/transations'); // para as rotas transactions
var supplierRouter = require('./routes/suppliers'); // para as rotas suppliers

var app = express(); // ativa API express

app.use(cors());

app.use(logger('dev'));
app.use(express.json()); // receber e enviar json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // cria rota app
app.use('/users', usersRouter); // cria rota user
app.use('/products', productRouter); // cria rota products
app.use('/cart', cartRouter); // cria rota para carts
app.use('/transaction', transactionRouter); //cria rota para a transactions
app.use('/suppliers', supplierRouter) //cria rota para a suppliers

// instanciar db

const db = require('./models');

async function applyDataStructure() {
    await db.sequelize.sync({ alter: true });
}

applyDataStructure();

// Iniciar o servidor com o app.js na porta 8080
var port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;