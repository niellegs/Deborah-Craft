import express from 'express';
import { openDb } from './configDB.js';
import { createTable, insertUser, updateUser } from './controler/Users.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = 8080;

createTable()

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")))

// CARREGA A PÁGINA INICIAL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"))
});

// CARREGA A PÁGINA DE LOGIN
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "login.html"))
})

// INSERE UM NOVO USUARIO NA TABELA USERS
app.post('/usuario', (req, res) => {
    insertUser(req.body)
    console.log(req.body)
    res.json({
        "statusCode": 200
    })
})

// ALTERA DADOS DE UM USUÁRIO EXISTENTE
app.put('/usuario', (req, res) => {
    // Se possuir o corpo da solicitação, mas não possuir o id:
    if(req.body && !req.body.id) {
        res.json({
            "statusCode": 400,
            "msg": "Você precisa informar um id"
        })
    } else {
        updateUser(req.body)
        res.json({
            "statusCode": 200
        })
    }
});

app.get("/usuario", (req,res) => {
    
})

// Lugar onde a aplicação tá rodando, graças a deus
app.listen(port, () => {console.log(`Rodando API na porta ${port}`)})