const mongoose = require("mongoose");
const Drinks = require("./drink.model");
const Users = require("./user.model");
const Bookings = require("./booking.model");
const ConnectRooms = require("./connectRoom.model");
const DrinkFeedback = require("./drinkFeedback.model");
const Match = require("./match.model");
const MeetingFeedback = require("./meetingFeedback.model");
const Order = require("./order.model");

const Db = {}; // Doi tuong dai dien DB co cac thuoc tinh (Entity Object) va phuong thuc ket noi

Db.Drinks = Drinks;
Db.Users = Users;
Db.Bookings = Bookings;
Db.ConnectRooms = ConnectRooms;
Db.DrinkFeedback = DrinkFeedback;
Db.Match = Match;
Db.MeetingFeedback = MeetingFeedback;
Db.Order = Order;

Db.connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Connect to MongoDB MMA successfully"));
  } catch (error) {
    next(error);
    process.exit();
  }
};

module.exports = Db;
