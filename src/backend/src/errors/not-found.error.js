export default class NotFoundError extends Error {
  constructor(message, code = 404) {
    super(message);
    this.code = code;
  }
}
