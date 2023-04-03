const express = require("express");
const router = express.Router();
const { getAllDataForDay, createDay } = require("../../controllers/days");
const { asyncErrorsHandler } = require("../../middlewares/asyncErrorsHandler");
const { validation } = require("../../middlewares/validation");
const { createDaySchema } = require("../../service/validationSchemas");

router.post("/", validation(createDaySchema), asyncErrorsHandler(createDay));

router.get("/:day", asyncErrorsHandler(getAllDataForDay));

module.exports = router;
