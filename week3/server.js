const express = require('express');
const jarvis = express();
const { v4: asdasd } = require('uuid');

const PORT = 3000;
jarvis.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}`);
})

//JSON Parser
jarvis.use(express.json())

//Created array for testing
let recycledItems = [
    {name: 'Water Bottle', description: 'Plastic', recyclable: true, quantity: 2, pricePerUnit: 1.05, _id: asdasd()},
    {name: 'Pepsi Can', description: 'Aluminum', recyclable: true, quantity: 4, pricePerUnit: 1.3, _id: asdasd()},
    {name: 'Beer Bottle', description: 'Glass', recyclable: true, quantity: 5, pricePerUnit: 2.5, _id: asdasd()},
    {name: 'Childs Toy', description: 'Rubber', recyclable: false, quantity: 1, pricePerUnit: 5, _id: asdasd()},
]

//GET - http://localhost:3000/intakeItems
jarvis.get('/itemsIntake', (req, res)=>{
    res.send(recycledItems)
})

//POST - http://localhost:3000/intakeItems
jarvis.post('/itemsIntake', (req, res)=>{
    const newItem = req.body
    newItem.id = asdasd()
    recycledItems.push(newItem)
    console.log(recycledItems)
    res.send(`Added new item, ${newItem.name}, for processing.`)
})