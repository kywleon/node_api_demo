const express = require('express');
var bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/dogs", (req , res) => {
    console.log(req.body)
    res.json({ message: "ok"})
})

app.put("/dogs/:id", (req , res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({ message: `updated dog ${req.params.id}`})
})

app.delete("/dogs/:id", (req , res) => {
    console.log(req.params.id)
    res.json({ message: `deleting dog ${req.params.id}`})
})


//get 
const port = 4567;

const dogs = [
    {
        name: "Jimbob",
        breed: "Husky"
    },
    {
        name: "Sam",
        breed: "Lab"
    }
];

app.get("/", (req, res) => {
    // console.log(req)
    res.json(dogs)
})

// app.get("/dogs/:id", (req, res) => {
//     res.send(`What do you want do know about dog ${req.params.id} ?`)
// })

app.get("/dogs/:id", (req, res) => {
    res.json(dogs[parseInt(req.params.id) - 1])
})

app.listen(port , () => {
    console.log(`Listen on port ${port}`)
})

// CRUD = create, read , update and delete
// HTTP => POST , GET ,PUT,PATCH , DELETE








