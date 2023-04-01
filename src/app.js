const express = require("express");
const daysRouter = require("./routes/api/days");
const errorHandler = require("./middlewares/errorsHandler");

const app = express();

app.use("/days", daysRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

module.exports = { app };
