const validation = (schema) => {
  return async (req, res, next) => {
    const result = schema.validate(req.body);

    if (result.error) {
      const errorField = result.error.details[0].context.label;

      console.log(result.error.details[0].context);

      return res
        .status(400)
        .json({ message: `missing value or error at "${errorField}" field` });
    }

    req.body = result.value;
    next();
  };
};

module.exports = { validation };
