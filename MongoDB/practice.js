// DEFINING SCHEMA FOR A USER COLLECTION

const { runMain } = require("module")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
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








