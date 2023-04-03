const { Day } = require("../db/schemas/daySchema");
const { NotFound } = require("http-errors");
// const { Question } = require("../db/schemas/questionSchema");

const createQuestionData = async (day) => {
  const isExistedDay = await Day.findOne({ slug: day });

  // console.log(isExistedDay.id);

  if (!isExistedDay) {
    throw new NotFound(
      `You can't add question to day with slug "${day}", because such day is not exist`
    );
  }

  return [];
};

module.exports = {
  createQuestionData,
};
