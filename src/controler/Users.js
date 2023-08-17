import { openDb } from '../configDB.js';


// Função que cria
export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY,user TEXT, nome TEXT, email TEXT, senha STRING)')
    })
}

// Função que insere um novo arquivo
export async function insertUser(user) {
    openDb().then(db => {
        db.run("INSERT INTO Users (nome, user, email, senha) VALUES (?,?,?,?)", [user.nome, user.user, user.email, user.senha]);
    })
}

//Função  que atualiza os dados de algum usuário
export async function updateUser(user) {
    openDb().then(db => {
        db.run("UPDATE Users SET user=?, nome=?, email=?, senha=? WHERE id=?", [user.user, user.nome, user.email, user.senha, user.id])
    })
}

export async function selectPessoa(pessoa){
    return db.all('SELECT * FROM Users')
    .then(res=>res)
}