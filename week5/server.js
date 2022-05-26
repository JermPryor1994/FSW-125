const express = require('express');
const jarvis = express();
const { v4: asdasd } = require('uuid');

const PORT = 9000;
jarvis.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}`);
})

const recycleRouter = require('./routes/recycledData')

jarvis.use('/items', recycleRouter)

//JSON Parser
jarvis.use(express.json())
