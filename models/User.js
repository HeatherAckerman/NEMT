const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Firstname is Required"
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;