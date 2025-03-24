export default (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ERROR:`, err);

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: "fail",
      message: err.message
    });
  } else {
    console.error('CRITICAL ERROR , BUGS BUGS BUGS :(', err);
  }

  res.status(500).json({
    status: "error",
    message: "Error during execution (middleware error handler)"
  });
};
