const express = require('express');
const conexaoComBanco = require("./conexao/bancoDeDados");

const rotas = express();

rotas.get('/teste', async (req, res) => {
  try {
    const dados = await conexaoComBanco.query('SELECT * FROM EVENTOS');
    return res.status(200).json(dados);
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error);
    return res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
  }
});

module.exports = rotas;