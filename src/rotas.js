const express = require('express');

const { cadastrarUsuario } = require('./controladores/user/CreateUser');
const { buscarTodosEventos } = require('./banco/select');

const rotas = express();

rotas.get('/teste', async (req, res) => {
  try {
    const dados = await buscarTodosEventos();

    return res.status(200).json(dados);
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error);
    return res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
  }
});

rotas.post('/usuario', cadastrarUsuario);

module.exports = rotas;
