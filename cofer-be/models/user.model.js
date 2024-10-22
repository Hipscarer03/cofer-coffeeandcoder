const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: function (v) {
        return v > 100;
      },
      message: "Max length are 100 characters",
    },
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return v > 100;
      },
      message: "Max length are 100 characters",
    },
  },
  password: {
    type: String,
    validate: {
      validator: function (v) {
        return v > 50;
      },
      message: "Password must be less than 50 characters",
    },
  },
  profile_image: String,
  bio: {
    type: String,
    validate: {
      validator: function (v) {
        return v > 1000;
      },
      message: "Max length are 1000 characters",
    },
  },
  profile: {
    skills: [{ title: String }],
    experience: String,
    interests: [{ title: String }],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
