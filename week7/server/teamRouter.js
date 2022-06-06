const express = require('express')
const teamRouter = express.Router()
const {v4: uuidv4} = require('uuid')

let teams = [
    {city: "New York", name: "Yankees", score: 9, finalist: true, colors: ['white ', 'grey ', 'blue '], _id: uuidv4()},
    {city: "New York", name: "Mets", score: 6, finalist: false, colors: ['white ', 'orange ', 'blue '], _id: uuidv4()},
    {city: "Chicago", name: "Bears", score: 12, finalist: true, colors: ['white ', 'orange ', 'blue '], _id: uuidv4()},
    {city: "Arizona", name: "Cardinals", score: 8, finalist: false, colors: ['red ', 'yellow ', 'white ', 'blue '], _id: uuidv4()}
]

teamRouter
//GET ALL
.get('/', (req, res) => {
    console.log("GETTING...")
    res.send(teams)
})
//GET ONE
.get("/:teamId", (req, res) => {
    const teamId = req.params.teamId;
    const getTeam = teams.find((team) => team.id === teamId);
    res.send(getTeam);
})
//ADD ITEM
.post('/', (req, res) => {
    const newTeam = req.body
    newTeam._id = uuidv4()
    teams.push(newTeam)
    console.log("CREATING...")
    res.send(newTeam)
})
//EDIT ITEM
.put('/:teamId', (req, res) => {
    const teamId = req.params.teamId
    console.log("teamId: ", teamId)
    const teamIndex = teams.findIndex(team => team._id === teamId)
    console.log("teamIndex: ", teamIndex)
    Object.assign(teams[teamIndex], req.body)
    console.log("UPDATING...")
    res.send(teams[teamIndex])
})
//DELETE ITEM
.delete('/:teamId', (req, res) => {
    const teamId = req.params.teamId
    const itemIndex = teams.findIndex(item => item._id === teamId)
    teams.splice(itemIndex, 1)
    console.log("DELETING...")
    res.send("Resource successfully deleted")
})


module.exports = teamRouter