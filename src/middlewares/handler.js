// page not found handler
module.exports.pageNotFound = (req, res, next) => {
  const error = new Error(`${req.originalUrl} page not found`);
  res.status(404);
  next(error);
};

// error handler
module.exports.errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.send(error.message);
};
