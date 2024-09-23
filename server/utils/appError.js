class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status || 500;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
