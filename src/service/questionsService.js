const { v4: uuidv4 } = require("uuid");
const { Day } = require("../db/schemas/daySchema");
const { Question } = require("../db/schemas/questionSchema");
const { NotFound, Conflict } = require("http-errors");

const createQuestionData = async (day, newQuestion) => {
  const questionEnTitle = newQuestion.text.en.question;
  const isExistedDay = await Day.findOne({ slug: day });

  if (!isExistedDay) {
    throw new NotFound(
      `You can't add question to day with slug "${day}", because such day is not exist`
    );
  }

  const isExistedTitleQuestion = await Question.findOne({
    "text.en.question": questionEnTitle,
  });

  if (isExistedTitleQuestion) {
    throw new Conflict("Question with such title is already exist");
  }

  const id = uuidv4();

  const newQuestionData = {
    ...newQuestion,
    dayId: isExistedDay.id,
    id,
  };

  await Day.findOneAndUpdate({ slug: day }, { $push: { questions: id } });

  return await Question.create(newQuestionData);
};

module.exports = {
  createQuestionData,
};
