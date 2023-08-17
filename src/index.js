import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { openDb } from './configDB.js';
import { createTable, insertUser, updateUser, selectUsers,selectUser, deleteUser } from './controler/Users.js';
import router from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "..", "public")))

// CARREGA A PÁGINA INICIAL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"))
});

// CARREGA A PÁGINA DE LOGIN
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "login.html"))
})

// CARREGA A PÁGINA DE CADASTRO
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "signup.html"))
})

// Lugar onde a aplicação tá rodando, graças a deus
app.listen(port, () => {console.log(`Rodando API na porta ${port}`)})