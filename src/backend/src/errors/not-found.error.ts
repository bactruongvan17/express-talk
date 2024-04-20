export default class NotFoundError extends Error {
  code: number;
  constructor(message: string, code: number = 404) {
    super(message);
    this.code = code;
  }
}
