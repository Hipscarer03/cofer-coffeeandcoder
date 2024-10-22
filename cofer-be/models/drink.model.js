const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Drink name is required"],
    unique: [true, "Drink name is duplicate"],
    validate: {
      validator: function (v) {
        return v > 100;
      },
      message: "Max length are 100 characters",
    },
  },
  description: {
    type: String,
    validate: {
      validator: function (v) {
        return v > 1000;
      },
      message: "Max length are 1000 characters",
    },
  },
  quatity: {
    type: Number,
    min: [1, "Quanity must be more than 0"],
  },
  price: {
    type: Number,
    validate: {
      min: [0, "Price must be more than 0"],
    },
  },
});

const Drink = mongoose.model("drink", drinkSchema);

module.exports = Drink; // export model
