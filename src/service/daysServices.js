const { Day } = require("../db/schemas/daySchema");
const { Conflict } = require("http-errors");

const createDayData = async (dayInfo) => {
  const isExistedDay = await Day.findOne({ slug: dayInfo.slug });

  if (isExistedDay) {
    throw new Conflict("The day with such slug is already exist");
  }

  return await Day.create(dayInfo);
};

module.exports = {
  createDayData,
};
