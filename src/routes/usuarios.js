const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.criarUsuario);
router.get('/', usuariosController.listarUsuarios);
router.get('/:id', usuariosController.obterUsuario);
router.put('/:id', usuariosController.atualizarUsuario);
router.delete('/:id', usuariosController.excluirUsuario);

module.exports = router;
