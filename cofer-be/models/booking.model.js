const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room",
  },
  booking_time: {
    type: Date,
    default: Date.now(),
  },
  meeting_time: {
    type: Date,
    default: Date.now(),
  },
  match_type: {
    type: String,
    enum: ["random", "manual"],
  },
  status: {
    type: String,
    enum: ["pending", "matched "],
  },
});

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking; // export model
