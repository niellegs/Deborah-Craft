import express from "express";
import { Router } from "express";
import { createTable, insertUser, updateUser, selectUsers,selectUser, deleteUser } from './controler/Users.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")))
app.use(router)

// Não está conectado com o banco de dados. Serve para dar ping na API (testar para ver se o funcionamento dela está ok)
app.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "API está funcionando tranquilamente."
    })
})


// Usuários
router.get('/usuarios', selectUsers);
router.get('/usuario', selectUser);
router.post('/usuario', insertUser);
router.put('/usuario', updateUser);
router.delete('/usuario', deleteUser);

// Produtos

export default router;