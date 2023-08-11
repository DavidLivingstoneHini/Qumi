import mongoose from "mongoose";
// const mongoose = require("mongoose");

const QueueSchema = mongoose.Schema({
  title: String,
  imageURL: String,
  price: Number,
  rating: Number,
});

// module.exports = mongoose.model("queue", QueueSchema)
const Queue = mongoose.model("Queue", QueueSchema);
export default Queue;
