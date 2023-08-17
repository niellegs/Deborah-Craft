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

// Função que retorna todos os usuários

export async function selectUsers(){
    return openDb().then(db => {
        return db.all('SELECT * FROM Users')
        .then(res=>res)
    })
}

// Função que retorna um usuário só

export async function selectUser(id) {
    return openDb().then(db => {
        return db.get('SELECT * FROM Users WHERE id=?', [id])
        .then(res => res)
    })
}

// Função que apaga um usuário

export async function deleteUser(id) {
    return openDb().then( db => {
        return db.get('DELETE FROM Users WHERE id=?', [id])
    })
}
