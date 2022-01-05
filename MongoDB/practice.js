const mongoose = require("mongoose");

// DEFINING SCHEMA FOR A USER COLLECTION

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    street: String,
    city: String,
  },
  password: {
    type: String,
  },
  createdAt: Date,
  updatedAt: Date,
  colleague: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
})


// DEFINING A MODEL FOR A USER COLLECTION

module.exports = mongoose.model("User", userSchema)


// CREATING A NEW USER IN A USER COLLECTION 

run()

async function run() {
    const user = new User({ name: "johndoe", email: "goku69@gmail.com" })
    await user.save()
    console.log("User Saved: ${user}")
}





