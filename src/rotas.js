const express = require('express')




const rotas = express()


rotas.get('/teste', (req, res) => {
  return res.status(200).json({ msg: "api rodando"})
})


module.exports = rotas;