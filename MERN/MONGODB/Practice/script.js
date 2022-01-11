const mongoose = require("mongoose");
const User = require("./db/models/user");

// CONNECTING MONGOOSE TO MONGODB

mongoose.connect("mongodb://localhost:27017/testdb", 
{ useNewUrlParser: "true" }).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Error Connecting to MongoDB: ${e}");
});

// CREATING A NEW USER IN A USER COLLECTION 

run()
async function run() {
    try {
        const user = await User.create({ 
            name: "johndoe", 
            email: "goku69@gmail.com",
            hobbies: ["football", "coding"],
            address: {
                street: "Main Street",
            }
        })
        // const user = new User({ fullName: "johndoe", email: "goku69@gmail.com" })
        // await user.save()
        user.name = "Bri"     // UPDATING THE NAME OF THE USER
        await user.save()
        console.log("User Saved: ${user}")
    }   catch (e) {
        console.log(e.message)
        }
}





