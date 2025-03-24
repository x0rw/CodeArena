export class AppError extends Error {
  constructor(
    message,
    statusCode = 500,
    errorCode = 'ERROR',
    isOperational = true,
    details = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = isOperational;
    this.details = details;
    this.timestamp = new Date().toISOString();

    // captures the stack trace at the point where the error was instantiated
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Authentication required', details = null) {
    super(message, 401, 'UNAUTHORIZED', true, details);
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validation failed', errors = []) {
    super(message, 422, 'VALIDATION_ERROR', true, { errors });
  }
}

export class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(`${resource} not found`, 404, 'NOT_FOUND');
  }
}

export class RateLimitError extends AppError {
  constructor(retryAfter = 60) {
    super('Too many requests', 429, 'RATE_LIMITED', true, { retryAfter });
    this.headers = { 'Retry-After': retryAfter.toString() };
  }
}

export class DatabaseConnectionError extends AppError {
  constructor(message = 'Database connection failed') {
    super(message, 503, 'DB_CONNECTION_ERROR', false);
  }
}

export class ThirdPartyServiceError extends AppError {
  constructor(serviceName, status = 503) {
    super(`${serviceName} service unavailable`, status, 'SERVICE_UNAVAILABLE');
  }
}

export class InvalidTokenError extends AppError {
  constructor(tokenType = 'access') {
    super(`Invalid ${tokenType} token`, 401, 'INVALID_TOKEN');
  }
}

export class InternalServerError extends AppError {
  constructor(message = 'Internal server error') {
    super(message, 500, 'INTERNAL_ERROR', false);
  }
}

export default {
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  RateLimitError,
  DatabaseConnectionError,
  ThirdPartyServiceError,
  InvalidTokenError,
  InternalServerError
};
