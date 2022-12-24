const RoomModel = require("../models/Rooms").Rooms;

const getAllRooms = async (req, res) => {
  const data = await RoomModel.find({});
  return res.status(200).send(data);
};

module.exports = {
  getAllRooms,
};
