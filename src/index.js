import express from 'express';
import { openDb } from './configDB.js';
import { createTable, insertUser } from './controler/Users.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = 8080;



app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "login.html"))
})

app.post('/usuario', (req, res) => {
    insertUser(req.body)
    console.log(req.body)
    res.json({
        "statusCode": 200
    })
})

app.listen(port, () => {console.log(`Rodando API na porta ${port}`)})