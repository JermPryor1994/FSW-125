const express = require('express');
const recycleRouter = express.Router();
const { v4: asdasd } = require('uuid');

//Created array for testing
let recycledItems = [
    {name: 'Water Bottle', description: 'Plastic', recyclable: true, quantity: 2, pricePerUnit: 1.05, _id: asdasd()},
    {name: 'Pepsi Can', description: 'Aluminum', recyclable: true, quantity: 4, pricePerUnit: 1.3, _id: asdasd()},
    {name: 'Beer Bottle', description: 'Glass', recyclable: true, quantity: 5, pricePerUnit: 2.5, _id: asdasd()},
    {name: 'Childs Toy', description: 'Rubber', recyclable: false, quantity: 1, pricePerUnit: 5, _id: asdasd()},
]

recycleRouter.get('/', (req, res)=>{
    res.send(recycledItems)
})

recycleRouter.get('/:itemId', (req, res)=>{
    const itemId = req.params.itemId
    const singleItem = recycledItems.find(item => item._id === itemId)
    res.send(singleItem)
})

recycleRouter.post('/', (req, res)=>{
    const newItem = req.body
    newItem.id = asdasd()
    recycledItems.push(newItem)
    console.log(recycledItems)
    res.send(`Added new item, ${newItem.name}, for processing.`)
})

recycleRouter.delete('/:itemId', (req, res) =>{
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex(item => item._id === itemId);
    recycledItems.splice(itemIndex, 1);
    console.log(recycledItems);
    res.send(`Recycled Item Successfully Deleted!`);
})

recycleRouter.put('/:itemId', (req, res)=>{
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex(item => item._id === itemId);
    Object.assign(recycledItems[itemIndex], req.body);
    res.send('Item Successfully Updated!');
})


module.exports = recycleRouter;