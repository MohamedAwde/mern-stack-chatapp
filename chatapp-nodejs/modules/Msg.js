const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MsgSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "User",
    },
    text: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

module.exports = mongoose.model("Msg", MsgSchema);
