const getAllDataForDay = (req, res, next) => {
  const { day } = req.params;
  res.send({ message: `successfull, day is ${day}` });
};

module.exports = {
  getAllDataForDay,
};
