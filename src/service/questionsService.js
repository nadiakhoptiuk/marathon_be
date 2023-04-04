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

  const newQuestionData = {
    ...newQuestion,
    dayId: isExistedDay.id,
  };

  const createdQuestion = await Question.create(newQuestionData);

  await Day.findOneAndUpdate(
    { slug: day },
    { $push: { questions: createdQuestion.id } }
  );
  return createdQuestion;
};

// functionality for update question (nested object with key text)
const updateQuestionData = async (questionId, question) => {
  try {
    const existedQuestion = await Question.findById(questionId);

    if (question.text) {
      existedQuestion.text = { ...existedQuestion.text, ...question.text };
    }

    return await Question.findOneAndUpdate(
      { _id: questionId },
      { ...question, text: existedQuestion.text },
      {
        new: true,
      }
    );
  } catch (error) {
    throw new NotFound(`The question with id "${questionId}" is not exist`);
  }
};

module.exports = {
  createQuestionData,
  updateQuestionData,
};
