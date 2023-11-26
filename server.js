const express = require('express')
const routerProductos = require('./routes/routerProduct.js')
const routerCarrito = require('./routes/routerCarrito.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/productos', routerProductos)
app.use('/api/carritos', routerCarrito)

//server
const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(` Iniciando Servidor http://localhost:${PORT}`)
});