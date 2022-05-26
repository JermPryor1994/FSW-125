const express = require("express")
const thingRouter = express.Router()
const { v4: uuid } = require("uuid")


const things = [
    {
        "name": "avacado",
        "price": 20,
        "type": "food",
        _id: uuid()
    },
    {
        "name": "apple",
        "price": 15,
        "type": "food",
        _id: uuid()
    },
    {
        "name": "Watermelon",
        "price": 50,
        "type": "food",
        _id: uuid()
    },
    {
        "name": "T-Shirt",
        "price": 120,
        "type": "clothing",
        _id: uuid()
    }
]
thingRouter.get("/", (req, res) => {
    res.send(things);
  });
  
  thingRouter.get("/:thingsId", (req, res) => {
    const thingsId = req.params.thingsId;
    const getThing = things.find((thing) => thing.id === thingsId);
    res.send(getThing);
  });
  
  thingRouter.get("/search/type", (req, res) => {
    const type = req.query.type;
    const foundThing = things.filter(thing => thing.type === type);
    res.send(foundThing);
  });
  
  thingRouter.post("/", (req, res) => {
    const newThing = req.body;
    newThing.id = uuid();
    things.push(newThing);
    res.send(`New Entry in database.`);
  });
  
  thingRouter.put("/:thingsId", (req, res) => {
    const thingsId = req.params.thingsId;
    const thingIndex = things.findIndex((thing) => thing.id === thingsId);
    const updateObject = req.body;
    const updateThing = Object.assign(things[thingIndex], updateObject);
    res.send(updateThing);
  });
  thingRouter.delete("/:thingsId", (req, res) => {
    const thingsId = req.params.thingsId;
    const thingIndex = things.findIndex((thing) => thing.id === thingsId);
    things.splice(thingIndex, 1);
    res.send("Entry Deleted");
  });
  module.exports = thingRouter;