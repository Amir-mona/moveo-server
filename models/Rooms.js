import mongoose from "mongoose";
const { Schema } = mongoose;

const roomsSchema = new Schema({
  name: String,
});

const Rooms = mongoose.model("Room", roomsSchema);

module.exports = {
  Rooms,
};
