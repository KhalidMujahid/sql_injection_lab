module.exports.validator = (req, res, next) => {
  try {
    if (req.params) {
      req.params = req.params.id;
    }
    if (req.query) {
      req.query = req.query.id;
    }
    if (req.body) {
      req.body = req.body.id;
    }
    next();
  } catch (error) {
    next(error);
  }
};
