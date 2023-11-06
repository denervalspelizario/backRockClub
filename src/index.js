const express = require('express');
require('dotenv').config();
const cors = require('cors');
const rotas = require('./rotas');

const app = express();
app.use(express.json());

app.use(rotas);

app.use(cors());

app.listen(process.env.PORT, () => console.log('Rodando a aplicação na porta 3000'));
