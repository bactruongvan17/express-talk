export default class UnAuthorizedError extends Error {
  code: number;
  constructor(message: string, code: number = 401) {
    super(message);
    this.code = code;
  }
}
