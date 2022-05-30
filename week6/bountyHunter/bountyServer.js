const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware (For Every Request)
app.use(express.json()) // Looks for req body and turns it into "req.body"
app.use(morgan('dev')) // Logs request to console


// Routes
app.use("/bountyHunter", require("./routes/bountyRouter.js"))

// Server Listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})