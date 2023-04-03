const { v4: uuidv4 } = require("uuid");
const { Day } = require("../db/schemas/daySchema");
const { Conflict } = require("http-errors");

const arrayWithId = (array) => {
  if (array?.length === 0) {
    return [];
  } else {
    return array.map((el) => {
      return { ...el, id: uuidv4() };
    });
  }
};

const addIdToAllQuestions = (day) => {
  const newGeneralQuestions = arrayWithId(
    day?.generalQuestions?.questions ?? []
  );

  const newVsCodeQuestions = arrayWithId(day?.vsCodeQuestions?.questions ?? []);

  return {
    slug: day.slug,
    title: day.title,
    generalQuestions: newGeneralQuestions,
    vsCodeQuestions: newVsCodeQuestions,
  };
};

const createDayData = async (dayInfo) => {
  const isExistedDay = await Day.findOne({ slug: dayInfo.slug });

  if (isExistedDay) {
    throw new Conflict("The day with such slug is already exist");
  }

  const newDayWithId = addIdToAllQuestions(dayInfo);

  return await Day.create(newDayWithId);
};

module.exports = {
  createDayData,
};
