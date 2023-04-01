const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const daysRouter = require("./routes/api/days");
const errorHandler = require("./middlewares/errorsHandler");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/days", daysRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

module.exports = { app };
