const {
  createDayData,
  getDataForDayBySlug,
  getAllDaysData,
} = require("../service/daysServices");

// getting all days titles
const getAllDaysTitles = async (req, res, next) => {
  const dataArray = await getAllDaysData();

  res.status(200).send({ data: dataArray });
};

// getting all data for day by slug
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
  getAllDaysTitles,
  getAllDataForDay,
  createDay,
};
