const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message || 'it"s new handler',
    },
  });
};

module.exports = errorHandler;
