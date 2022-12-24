const express = require("express");
const studentController = require("../controllers/Room.controller");
const router = express.Router();

router.get("/", (req, res) => {
  studentController.getAllRooms(req, res);
});

module.exports = router;
