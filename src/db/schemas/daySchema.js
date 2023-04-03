const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const daysSchema = new Schema({
  slug: {
    type: String,
    minlength: 1,
    maxlength: 5,
    required: [true, "Slug of the day is required"],
    // unique: [true, "Day with this slug already exists in the database"],
  },

  title: {
    type: Object,
    required: [true, "Title of the day is required"],
    unique: [true, "Day with this title already exists in the database"],
  },

  questions: {
    type: Array,
  },
});

const Day = model("day", daysSchema);

module.exports = {
  Day,
};
