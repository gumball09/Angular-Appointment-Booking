module.exports.requestLogger = (req, res, next) => {
    console.log(
      `Method: ${req.method} - Path: ${req.path} - Body:`,
      req.body,
      `\n-----`
    );

    next();
}