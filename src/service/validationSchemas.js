const Joi = require("joi");

const cyrillicTitleRegex = /^[А-Я]+[а-я]+\s?\d*\s?-?\s?\d*$/;
const latinTitleRegex = /^[A-Z]+[a-z]+\s?\d*\s?-?\s?\d*$/;

const slugRegex = /^[a-z]+(-\d*)*$/;

const createDaySchema = Joi.object({
  slug: Joi.string()
    .pattern(new RegExp(slugRegex))
    .min(1)
    .max(15)
    .required("Slug is required"),

  title: Joi.object({
    en: Joi.string()
      .trim()
      .min(5)
      .max(15)
      .pattern(new RegExp(latinTitleRegex))
      .required(),
    uk: Joi.string()
      .trim()
      .min(5)
      .max(15)
      .pattern(new RegExp(cyrillicTitleRegex))
      .required(),
    ru: Joi.string()
      .trim()
      .min(5)
      .max(15)
      .pattern(new RegExp(cyrillicTitleRegex))
      .required(),
  }).required("Title is required"),

  // questions: Joi.array().optional().items(Joi.string()),
});

// tags: Joi.array()
//     .items(
//       Joi.object({
//         tag: Joi.string().trim().valid("general", "vscode").required(),

//         title: Joi.object({
//           en: Joi.string().trim().required(),
//           uk: Joi.string().trim().required(),
//           ru: Joi.string().trim().required(),
//         }).required(),
//       })
//     )
//     .required("Tag is required"),

const createQuestionSchema = Joi.object({
  range: Joi.string().required("Range is required"),

  text: Joi.object({
    en: Joi.object({
      question: Joi.string().required("Question is required"),
      answer: Joi.string().required("Answer is required"),
    }).required(),

    uk: Joi.object({
      question: Joi.string().required("Question is required"),
      answer: Joi.string().required("Answer is required"),
    }).required(),

    ru: Joi.object({
      question: Joi.string().required("Question is required"),
      answer: Joi.string().required("Answer is required"),
    }).required(),
  }).required("Question is required"),

  tag: Joi.string()
    .trim()
    .valid("general", "vscode")
    .required("Id of the day is required"),
});

const updateQuestionSchema = Joi.object({
  range: Joi.string(),

  text: Joi.object({
    en: Joi.object({
      question: Joi.string(),
      answer: Joi.string(),
    }),

    uk: Joi.object({
      question: Joi.string(),
      answer: Joi.string(),
    }),

    ru: Joi.object({
      question: Joi.string(),
      answer: Joi.string(),
    }),
  }),

  tag: Joi.string().trim().valid("general", "vscode"),
}).min(1);

module.exports = {
  createDaySchema,
  createQuestionSchema,
  updateQuestionSchema,
};
