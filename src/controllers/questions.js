const {
  createQuestionData,
  updateQuestionData,
} = require("../service/questionsService");

// creating new question
const createNewQuestion = async (req, res, next) => {
  const { day } = req.params;
  const newQuestion = req.body;

  await createQuestionData(day, newQuestion);

  res
    .status(201)
    .send({ message: "The question has been successfully created" });
};

// updating question
const updateQuestion = async (req, res, next) => {
  const question = req.body;
  const { questionId } = req.params;

  const updatedQuestion = await updateQuestionData(questionId, question);

  res.status(200).send({
    message: `The question with id=${questionId} has been successfully updated`,
    data: updatedQuestion,
  });
};

module.exports = {
  createNewQuestion,
  updateQuestion,
};
