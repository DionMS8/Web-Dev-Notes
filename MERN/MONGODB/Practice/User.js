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
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
    validate: {
      validator: v => v % 2,
      message: props => "${props.value} is not an even number",
    }
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  address: {
    street: String,
    city: String,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  colleague: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
})




