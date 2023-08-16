const path = require("path")
const express = require("express")

const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, "..", "public")))

app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "..", "views", "index.html")
    res.sendFile(indexPath)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})