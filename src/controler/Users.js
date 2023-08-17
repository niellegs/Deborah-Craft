import { openDb } from '../configDB.js';


// Função que cria
export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY,user TEXT, nome TEXT, email TEXT, senha STRING)')
    })
}

// Função que insere um novo usuário
export async function insertUser(req, res) {
    let user =  req.body;
    openDb().then(db => {
        db.run("INSERT INTO Users (nome, user, email, senha) VALUES (?,?,?,?)", [user.nome, user.user, user.email, user.senha]);
    });
    res.json({
        "statusCode": 200
    });
}

//Função  que atualiza os dados de algum usuário
export async function updateUser(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run("UPDATE Users SET user=?, nome=?, email=?, senha=? WHERE id=?", [user.user, user.nome, user.email, user.senha, user.id])
    });

    res.json({
        "statusCode": 200
    });
}

// Função que retorna todos os usuários

export async function selectUsers(req, res){
    openDb().then(db => {
        db.all('SELECT * FROM Users')
        .then(users=> res.json(users))
    });
}

// Função que retorna um usuário só

export async function selectUser(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Users WHERE id=?', [id])
        .then(user => res.json(user));
    });

}

// Função que apaga um usuário

export async function deleteUser(req, res) {
    let id = req.body.id
    openDb().then( db => {
        db.get('DELETE FROM Users WHERE id=?', [id])
    });
    res.json({
        "statusCode": 200
    });
}
