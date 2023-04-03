const { createQuestionData } = require("../service/questionsService");

// creating new question
const createNewQuestion = async (req, res, next) => {
  const { day } = req.params;
  const newQuestion = req.body;

  await createQuestionData(day, newQuestion);

  res
    .status(201)
    .send({ message: "The question has been successfully created" });
};

module.exports = {
  createNewQuestion,
};
