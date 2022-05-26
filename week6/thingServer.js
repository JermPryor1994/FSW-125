const express = require("express");
const jarvis = express();
const morgan = require("morgan");

jarvis.use(express.json());
jarvis.use(morgan("dev"));
jarvis.use("/things", require("./thingRouter"));

jarvis.use((err, req, res, next) => {
  console.log(err);
});

jarvis.listen(4000, () => {
  console.log("Server Success: localhost:4000");
});