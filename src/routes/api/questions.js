const express = require("express");
const {
  createNewQuestion,
  updateQuestion,
  getQuestionDataById,
  getAllQuestionsByIds,
} = require("../../controllers/questions");
const { asyncErrorsHandler } = require("../../middlewares/asyncErrorsHandler");
const { validation } = require("../../middlewares/validation");
const {
  createQuestionSchema,
  updateQuestionSchema,
} = require("../../service/validationSchemas");

const router = express.Router();

router.get("/:questionId", asyncErrorsHandler(getQuestionDataById));

router.get("/all/:dayId", asyncErrorsHandler(getAllQuestionsByIds));

router.post(
  "/:dayId",
  validation(createQuestionSchema),
  asyncErrorsHandler(createNewQuestion)
);

router.patch(
  "/:questionId",
  validation(updateQuestionSchema),
  asyncErrorsHandler(updateQuestion)
);

module.exports = router;
