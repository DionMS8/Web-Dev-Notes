const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

mongoose.connect("mongodb://localhost:27017/testdb", {
  useNewUrlParser: "true",
})

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






