const express = require("express")
const app = express()

const PORT = 8000

app.get("/", (req, res) => {
    res.send("Welcome to the Marcy Lab School!")
})

app.get("/apply", (req, res) => {
    if(req.query.name){
        res.send(`You've applied, ${req.query.name}!`)
    }
    res.send("Thank you for applying to Marcy!")
})

app.get("*", (req, res) => {
    res.status(404) //status codes are important
    res.send("Sorry, that route does not exist.")
})

app.listen(PORT, () => {
    console.log("Server runing on PORT ", PORT)
})


// app.use(express.json()) //needed to send a body for POST req


// let id = 2
// const fellows = [{id: 1, name: "Carmen", present: true}]

// app.get("/fellows", (req, res) => {
//     //res.status(200)
//     res.send(fellows)
// })

// app.post("/fellows", (req, res) => {
//     const {name, present} = req.body
//     const newFellow = {id, name, present}
//     id += 1
//     fellows.push(newFellow)
//     res.status(201)
//     res.send(newFellow)
// })
