const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    age: Number
});
module.exports = User = mongoose.model("users", userSchema);