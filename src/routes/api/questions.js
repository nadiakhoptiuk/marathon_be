const express = require("express");
const { createNewQuestion } = require("../../controllers/questions");
const { asyncErrorsHandler } = require("../../middlewares/asyncErrorsHandler");
const { validation } = require("../../middlewares/validation");
const { createQuestionSchema } = require("../../service/validationSchemas");
const router = express.Router();

router.post(
  "/:day",
  validation(createQuestionSchema),
  asyncErrorsHandler(createNewQuestion)
);

module.exports = router;
