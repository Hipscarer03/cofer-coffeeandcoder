const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  drink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "drink",
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order; // export model
