const express= require('express')
const app =express()
const vehicules = require('./vehicules.json')
const reservations = require('./reservations.json')

app.use(express.json())
app.get('/vehicules', (req,res) => {res.status(200).json(vehicules)})

app.get('/vehicules/:id', (req, res) => {
const id = parseInt(req.params.id)
const vehicule = vehicules.find(vehicule => vehicule.id === id)
res.status(200).json(vehicule)
})

app.post('/reservations', (req, res) => {
console.log(req.body)
reservations.push(req.body)
res.status(200).json(reservations)
})

app.delete('/vehicules/:id', (req, res) => {
const id = parseInt(req.params.id)
let vehicule = vehicules.find(vehicule => vehicule.id === id)
vehicules.splice(vehicules.indexOf(vehicule), 1)
res.status(200).json(vehicules)
})

app.listen(8080, () => { console.log("Serveur à l'écoute") })
