const { Day } = require("../db/schemas/daySchema");
const { Conflict, NotFound } = require("http-errors");

const createDayData = async (dayInfo) => {
  const isExistedDay = await Day.findOne({ slug: dayInfo.slug });

  if (isExistedDay) {
    throw new Conflict("The day with such slug is already exist");
  }

  return await Day.create(dayInfo);
};

const getAllDaysData = async () => {
  const allDays = await Day.find();

  if (!allDays) {
    throw new NotFound("There are no one day in the database");
  }

  const titles = allDays.map((day) => day.title);

  return titles;
};

const getDataForDayBySlug = async (day) => {
  const isExistedDay = await Day.findOne({ slug: day });

  if (!isExistedDay) {
    throw new NotFound("The day with such slug is not exist");
  }

  return isExistedDay;
};

module.exports = {
  createDayData,
  getAllDaysData,
  getDataForDayBySlug,
};
