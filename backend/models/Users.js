const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    match: /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]|\\:;'<>,.?/~`-]{8,}$/,
    unique: false,
  },
});

module.exports = models.Users || model("Users", UserSchema);
