const { createQuestionData } = require("../service/questionsService");

// creating new day
const createNewQuestion = async (req, res, next) => {
  const { day } = req.params;
  await createQuestionData(day);

  res
    .status(201)
    .send({ message: "The question has been successfully created" });
};

module.exports = {
  createNewQuestion,
};
