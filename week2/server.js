const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}`);
})

app.get('/children/1', (req, res) =>{
    res.send({name: "Blake", age: 7, gender: "male"})
})
app.get('/children/2', (req, res) =>{
    res.send({name: "Hattie", age: 2, gender: "female"})
})
app.get('/children/3', (req, res) =>{
    res.send({name: "Alex", age: 2, gender: "male"})
})