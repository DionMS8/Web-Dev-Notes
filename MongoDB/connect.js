const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

mongoose.connect("mongodb://localhost:27017/testdb", 
{ useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Error Connecting to MongoDB: " + e);
});


mongoose.connection.on("error", err => {
    console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})

const PORT = 3000

app.listen(PORT, () => {
  console.log("app is listening to PORT ${PORT}")
})




mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TestDB', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});


module.exports = {
  mongoose
};






