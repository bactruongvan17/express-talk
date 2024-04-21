export default class UnAuthorizedError extends Error {
  code: number = 401;
  constructor(message: string) {
    super(message);
  }
}
