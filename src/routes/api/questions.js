const express = require("express");
const {
  createNewQuestion,
  updateQuestion,
} = require("../../controllers/questions");
const { asyncErrorsHandler } = require("../../middlewares/asyncErrorsHandler");
const { validation } = require("../../middlewares/validation");
const {
  createQuestionSchema,
  updateQuestionSchema,
} = require("../../service/validationSchemas");
const router = express.Router();

router.post(
  "/:day",
  validation(createQuestionSchema),
  asyncErrorsHandler(createNewQuestion)
);

router.patch(
  "/:questionId",
  validation(updateQuestionSchema),
  asyncErrorsHandler(updateQuestion)
);

module.exports = router;
