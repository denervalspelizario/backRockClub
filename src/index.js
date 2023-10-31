const express = require('express')
require('dotenv').config()
const rotas = require('./rotas')
const cors = require('cors')


const app = express();
app.use(express.json());

app.use(rotas);



app.use(cors());



app.listen(3000, () => console.log(`Rodando a aplicação na porta 3000`));
