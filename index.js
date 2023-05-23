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

app.get('/reservations', (req,res) => {res.status(200).json(reservations)})

app.get('/reservations/:idres', (req, res) => {
const idres = parseInt(req.params.idres)
const reservation = reservations.find(reservation => reservation.idres === idres)
res.status(200).json(reservation)
})

app.post('/reservations', (req, res) => {
console.log(req.body)
reservations.push(req.body)
res.status(200).json(reservations)
})

app.put('/reservations/:idres', (req, res) => {
const id = parseInt(req.params.idres)
let reservation = reservations.find(reservation => reservation.idres === id)
reservation.idveh = req.body.idveh,
reservation.nom = req.body.nom,
reservation.permis = req.body.permis,
reservation.datereserve= req.body.datereserve,
reservation.dateretour = req.body.dateretour,
res.status(200).json(reservation)
})

app.delete('/vehicules/:id', (req, res) => {
const id = parseInt(req.params.id)
let vehicule = vehicules.find(vehicule => vehicule.id === id)
vehicules.splice(vehicules.indexOf(vehicule), 1)
res.status(200).json(vehicules)
})

app.listen(8080, () => { console.log("Serveur à l'écoute") })
