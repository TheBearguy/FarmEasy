
const app = require("./app");
const mongoose = require("mongoose");

const DB = "mongodb+srv://nilanchalpanda2003:ACEHACKS@cluster0.ruxxtrs.mongodb.net/ACEHACKS?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then((con) => {
  console.log("DB CONNECTION DONE :)");
  
});

// SERVER START :
// console.log("MODE (server.js) : ", .NODE_ENV);
const port =  5001;
app.listen(port, () => {
  console.log(`Running on port - ${port}..`);
});