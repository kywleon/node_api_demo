const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const mongoDB = 'mongodb://locahost:27017/dog_api'
mongoose.connect(mongoDB, {useNewUrlParser: true , useUnifiedTopology : true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const dogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number
});

const Dog = mongoose.model('Dog' , dogSchema)

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/dogs", (req , res) => {
    console.log(req.body)
    res.json({ message: "ok"})
})

//put
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

// const dogs = [
//     {
//         name: "Jimbob",
//         breed: "Husky"
//     },
//     {
//         name: "Sam",
//         breed: "Lab"
//     }
// ];

app.get("/", (req, res) => {
    const dogs = Dog.find()
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








