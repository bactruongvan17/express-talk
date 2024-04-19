export default class UnAuthorizedError extends Error {
  constructor(message, code = 401) {
    super(message);
    this.code = code;
  }
}
