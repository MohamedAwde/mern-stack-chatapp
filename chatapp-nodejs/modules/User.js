const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    uniqe: true,
  },
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: false,
    min: 6,
  },
});

module.exports = mongoose.model("User", UserSchema);
