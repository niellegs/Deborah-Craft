import sqlite3 from "sqlite3"
import sqlite from "sqlite"

export async function openDb() {
    return open({
        filename: "./database.db",
        driver: sqlite3.database
    })
}