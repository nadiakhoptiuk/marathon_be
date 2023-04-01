const express = require("express");
const router = express.Router();
const { getAllDataForDay } = require("../../controllers/days");

router.get("/:day", getAllDataForDay);

module.exports = router;
