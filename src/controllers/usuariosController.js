const db = require('../db/knex');

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, data_nascimento, telefone, email } = req.body;
    await db('usuarios').insert({ nome, data_nascimento, telefone, email });
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await db('usuarios').select('*');
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obterUsuario = async (req, res) => {
  try {
    const usuario = await db('usuarios').where({ id: req.params.id }).first();
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.atualizarUsuario = async (req, res) => {
  try {
    const { nome, data_nascimento, telefone, email } = req.body;
    const updated = await db('usuarios').where({ id: req.params.id }).update({ nome, data_nascimento, telefone, email });
    if (updated) {
      res.json({ message: 'Usuário atualizado com sucesso' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirUsuario = async (req, res) => {
  try {
    const deleted = await db('usuarios').where({ id: req.params.id }).del();
    if (deleted) {
      res.json({ message: 'Usuário excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
