require('dotenv').config();
const express = require('express');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

app.use(express.json());
app.use('/usuarios', usuariosRoutes);

// Rota básica para teste
app.get('/', (req, res) => res.send('API funcionando!'));

module.exports = app;
