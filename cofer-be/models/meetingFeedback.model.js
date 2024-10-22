const mongoose = require("mongoose");

const meetingFeedbackSchema = new mongoose.Schema({
  match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "match",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  ref_yser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  rating: {
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

const MeetingFeedback = mongoose.model(
  "meetingFeedback",
  meetingFeedbackSchema
);

module.exports = MeetingFeedback; // export model
