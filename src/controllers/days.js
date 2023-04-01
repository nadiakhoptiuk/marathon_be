const getAllDataForDay = (req, res, next) => {
  const { day } = req.params;
  next();
  res.send({ message: `successfull, day is ${day}` });
};

module.exports = {
  getAllDataForDay,
};
