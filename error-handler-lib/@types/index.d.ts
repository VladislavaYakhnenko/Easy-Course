declare const handleErrorCode: (error: ErrorResponse) => void;

interface ErrorResponse {
  response: {
    status: number;
    data: any;
  }
}

export {
  handleErrorCode,
  ErrorResponse
}