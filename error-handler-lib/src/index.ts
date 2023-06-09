import type { ErrorResponse } from "../@types";

enum ErrorCodes {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  ServiceUnavailable = 503,
}

class DefaultError {
  handle(error: ErrorResponse): void {
    console.error("Error:", error.response.data);
  }
}

class BadRequestError extends DefaultError {
  handle(error: ErrorResponse): void {
    console.error("Bad Request:", error.response.data);
  }
}

class UnauthorizedError extends DefaultError {
  handle(error: ErrorResponse): void {
    console.error("Unauthorized:", error.response.data);
  }
}

class ForbiddenError extends DefaultError {
  handle(error: ErrorResponse): void {
    console.error("Forbidden:", error.response.data);
  }
}

class NotFoundError extends DefaultError {
  handle(error: ErrorResponse): void {
    console.error("Not Found:", error.response.data);
  }
}

class InternalServerError extends DefaultError {
  handle(error: ErrorResponse): void {
    console.error("Internal Server Error:", error.response.data);
  }
}

class ServiceUnavailableError extends DefaultError {
  handle(error: ErrorResponse): void {
    console.error("Service Unavailable:", error.response.data);
  }
}

const handleErrorCode = (error: ErrorResponse): void => {
  let errorValue:
    DefaultError |
    BadRequestError |
    UnauthorizedError |
    ForbiddenError |
    NotFoundError |
    InternalServerError |
    ServiceUnavailableError |
    null
    = null;

  switch (error.response.status) {
    case ErrorCodes.BadRequest:
      errorValue = new BadRequestError();
      break;
    case ErrorCodes.Unauthorized:
      errorValue = new UnauthorizedError();
      break;
    case ErrorCodes.Forbidden:
      errorValue = new ForbiddenError();
      break;
    case ErrorCodes.NotFound:
      errorValue = new NotFoundError();
      break;
    case ErrorCodes.InternalServerError:
      errorValue = new InternalServerError();
      break;
    case ErrorCodes.ServiceUnavailable:
      errorValue = new ServiceUnavailableError();
      break;
    default:
      errorValue = new DefaultError();
      break;
  }

  errorValue.handle(error);
};

export default handleErrorCode;