const express = require('express');
const jarvis = express();
const { v4: uuidv4 } = require('uuid');

const PORT = 3000;
jarvis.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}`);
});

//JSON Parser
jarvis.use(express.json());

let toDoList = [
    {name: 'Do Laundry', description: 'Wash, Dry, Fold', time: 'Two Hours', isComplete: false, _id: uuidv4()},
    {name: 'Wash Dishes', description: 'Scrub, Rinse, Put Away', time: '30 Minutes', isComplete: false, _id: uuidv4()},
    {name: 'Feed Animals', description: 'Catfood to Cats. Dogfood to Dogs', time: '5 Minutes', isComplete: false, _id: uuidv4()},
    {name: 'Do Homework', description: 'Study, Type, Submit', time: 'However long it takes, JUST DO IT!', isComplete: false, _id: uuidv4()}
    
];

//GET ALL-
jarvis.get('/', (req, res)=>{
    res.send(toDoList);
})

//GET ONE-
jarvis.get('/:todoId', (req, res)=>{
    const todoId = req.params.todoId;
    const specificToDo = toDoList.find(todo => todo._id === todoId);
    res.send(specificToDo);
})

//POST ONE-
jarvis.post('/', (req, res, next)=>{
    const newTodo = req.body;
    newTodo.isComplete = false;
    newTodo.id = uuidv4();
    toDoList.push(newTodo);
    // console.log(toDoList);
    next();
})
jarvis.post('/', (req, res, next)=>{
    res.send(toDoList);
})

//PUT ONE(Change isComplete to true)-
jarvis.put('/:todoId', (req, res)=>{
    const todoId = req.params.todoId;
    const todoIndex = toDoList.findIndex(todo => todo._id === todoId);
    Object.assign(toDoList[todoIndex], req.body);
    res.send(`Successful Update! Don't Lose Focus!`)
})

//DELETE ONE-
jarvis.delete('/:todoId', (req, res)=>{
    const todoId = req.params.todoId;
    const todoIndex = toDoList.findIndex(todo => todo._id === todoId);
    toDoList.splice(todoIndex, 1);
    res.send(`YOU DID IT! Be proud of yourself! :)`)
})