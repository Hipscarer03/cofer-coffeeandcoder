const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "booking",
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  match_time: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["waiting", "meeting", "met", " canceled"],
  },
});

const Match = mongoose.model("match", matchSchema);

module.exports = Match; // export model
