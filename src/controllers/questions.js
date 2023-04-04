const {
  createQuestionData,
  updateQuestionData,
  getQuestionData,
  getAllQuestionDataByDay,
} = require("../service/questionsService");

// get one question by Id
const getQuestionDataById = async (req, res, next) => {
  const { questionId } = req.params;

  const existedQuestion = await getQuestionData(questionId);

  res.status(200).send({ data: existedQuestion });
};

// get many questions by id
const getAllQuestionsByIds = async (req, res, next) => {
  const { dayId } = req.params;

  const foundedQuestions = await getAllQuestionDataByDay(dayId);

  res.status(200).send({ data: foundedQuestions });
};

// creating new question
const createNewQuestion = async (req, res, next) => {
  const { dayId } = req.params;
  const newQuestion = req.body;

  await createQuestionData(dayId, newQuestion);

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
  getQuestionDataById,
  getAllQuestionsByIds,
  createNewQuestion,
  updateQuestion,
};
