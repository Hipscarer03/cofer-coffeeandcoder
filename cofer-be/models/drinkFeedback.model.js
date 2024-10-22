const mongoose = require("mongoose");

const drinkFeedbackSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  ref_yser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  raing: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  comment: {
    type: String,
    validate: {
      validator: function (v) {
        return v > 2000;
      },
      message: "Max length are 2000 characters",
    },
  },
});

const DrinkFeedback = mongoose.model("drinkFeedback", drinkFeedbackSchema);

module.exports = DrinkFeedback; // export model
