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

  generalQuestions: Joi.object({
    title: Joi.object({
      en: Joi.string().trim().required(),
      uk: Joi.string().trim().required(),
      ru: Joi.string().trim().required(),
    }).required(),
    questions: Joi.array()
      .optional()
      .items(
        Joi.object({
          range: Joi.string().required(),
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
        })
      ),
  }),

  vsCodeQuestions: Joi.object({
    title: Joi.object({
      en: Joi.string().trim().required(),
      uk: Joi.string().trim().required(),
      ru: Joi.string().trim().required(),
    }).required(),
    questions: Joi.array()
      .optional()
      .items(
        Joi.object({
          range: Joi.string().required(),
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
        })
      ),
  }),
});

module.exports = {
  createDaySchema,
};