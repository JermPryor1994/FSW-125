const express = require('express')
const teamRouter = require('./teamRouter')

const jarvis = express()
const PORT = 9000

//Middleware
jarvis.use(express.json())
jarvis.use("/teams", teamRouter)


//Server Startup
jarvis.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})