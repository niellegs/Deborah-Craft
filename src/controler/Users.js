import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY,user TEXT, nome TEXT, email TEXT, senha STRING)')
    })
}

export async function insertUser(user) {
    openDb().then(db => {
        db.run("INSERT INTO Users (nome, user, email, senha) VALUES (?,?,?,?)", [user.nome, user.user, user.email, user.senha]);
    })
}