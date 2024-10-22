const mongoose = require("mongoose");

const connectRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "ConnectRoom name is required"],
    unique: [true, "ConnectRoom name is duplicate"],
    validate: {
      validator: function (v) {
        return v > 50;
      },
      message: "Max length are 50 characters",
    },
  },
  capacity: {
    type: Number,
    max: [30, "Maximum capacity is 30"],
  },
});

const ConnectRoom = mongoose.model("connectRoom", connectRoomSchema);

module.exports = ConnectRoom; // export model
