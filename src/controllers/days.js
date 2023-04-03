const { Day } = require("../db/schemas/daySchema");
const {
  createDayData,
  getDataForDayBySlug,
} = require("../service/daysServices");

// getting all day data
const getAllDataForDay = async (req, res, next) => {
  const { day } = req.params;

  const dayInfo = await getDataForDayBySlug(day);

  res.status(200).send({ data: dayInfo });
};

// creating new day
const createDay = async (req, res, next) => {
  await createDayData(req.body);

  res.status(201).send({ message: "The day has been successfully created" });
};

module.exports = {
  getAllDataForDay,
  createDay,
};
