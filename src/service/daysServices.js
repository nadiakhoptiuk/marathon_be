const { Day } = require("../db/schemas/daySchema");
const { Conflict, NotFound } = require("http-errors");

const createDayData = async (dayInfo) => {
  const isExistedDay = await Day.findOne({ slug: dayInfo.slug });

  if (isExistedDay) {
    throw new Conflict("The day with such slug is already exist");
  }

  return await Day.create(dayInfo);
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
  getDataForDayBySlug,
};
