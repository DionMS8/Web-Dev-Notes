// IMPORTING THE EXPRESS MODULE
const express = require("express");

// CREATING AN EXPRESS MODULE OBJECT
const app = express();

// CREATING A CALLBACK FUNCTION FUNCTION WHICH WILL BE INVOKED WHENEVER THE USER LOADS THE URL FOR THE APPLICATION
app.get("/", (req, res) => res.send("Hello World"));

// ESTABLISHING THE SERVER CONNECTION 
// ASSIGNING THE PORT
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log("Listening on port ${port}..."))
