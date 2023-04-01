const Joi = require("joi");

const createDaySchema = Joi.object({
  id: Joi.string().alphanum().min(1).max(5).required("Id is required"),

  title: Joi.string().min(5).max(15).required("Title is required"),

  generalQuestions: Joi.array(),

  vsCodeQuestions: Joi.array(),
});

module.exports = {
  createDaySchema,
};
