const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const questionsSchema = new Schema({
  range: {
    type: String,
    required: [true, "Range is required"],
  },

  text: {
    type: Object,
    required: [true, "Text is required"],
  },

  dayId: {
    type: String,
    required: [true, "Id of the day is required"],
  },

  tag: {
    type: String,
    enum: ["general", "vscode"],
    required: [true, "Id of the day is required"],
  },
});

const Question = model("question", questionsSchema);

module.exports = {
  Question,
};
