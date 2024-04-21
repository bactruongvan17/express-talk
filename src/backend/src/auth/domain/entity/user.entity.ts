export class User {
  private _id: string = "";

  constructor(
    private readonly _username: string,
    private readonly _password: string,
    public fullName: string,
  ) {}

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }
}
