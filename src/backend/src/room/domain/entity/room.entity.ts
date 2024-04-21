import { Member } from "./member.entity";
import { Owner } from "./owner.entity";

export class Room {
  private _id: string = "";

  private _name: string;

  private readonly _owner: Owner;

  private _members: Member[];

  constructor(name: string, owner: Owner, members: Member[]) {
    this._name = name;
    this._owner = owner;
    this._members = members;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get owner(): Owner {
    return this._owner;
  }

  get members(): Member[] {
    return this._members;
  }

  set members(value: Member[]) {
    this._members = value;
  }
}
