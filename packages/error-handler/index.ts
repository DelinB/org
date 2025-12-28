export * from './error-midleware';  // ✅ Re-exports everything

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly details?: unknown;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    details?: unknown
  ) {
    super(message);


    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found', details?: unknown) {
    super(message, 404, true, details);
  }
}

export class ValidateError extends AppError {
  constructor(message = 'Invalid Request Data', details?: unknown) {
    super(message, 400, true, details);
  }
}

export class AuthError extends AppError {
  constructor(message = 'Unauthorized', details?: unknown) {
    super(message, 401, true, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden access', details?: unknown) {
    super(message, 403, true, details);
  }
}

export class DatabaseError extends AppError {
  constructor(message = 'Database error', details?: unknown) {
    super(message, 500, true, details);
  }
}

export class RateLimitError extends AppError {
    constructor(message = 'Too many request , please try again later' ){
        super(message,429)
    }
}