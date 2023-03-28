const express = require("express")
const app = express()
const router = require('./router')

const PORT = 8000

app.use(express.json())
app.use(router)

app.get("/", (req, res) => {
    res.send("Welcome to the Marcy Lab School!")
})

app.listen(PORT, () => {
    console.log("API runing on PORT ", PORT)
})