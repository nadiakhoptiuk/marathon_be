const mongoose = require("mongoose");
const { Schema, model } = mongoose.Schema;

const days = new Schema({
  id: {
    type: String,
    minlength: 1,
    maxlength: 5,
    required: [true, "Id of the day is required"],
    unique: [true, "Day with this id already exists in the database"],
  },
  title: {
    type: String,
    minlength: 5,
    maxlength: 15,
    required: [true, "Title of the day is required"],
    unique: [true, "Day with this title already exists in the database"],
  },
  generalQuestions: {
    type: Array,
  },
  vsCodeQuestions: {
    type: Array,
  },
});

const Day = model("day", days);

module.exports = {
  Day,
};
