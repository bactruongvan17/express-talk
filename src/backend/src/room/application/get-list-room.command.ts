import { Owner } from "../domain/entity/owner.entity";
import { Command } from "@bactv/command-bus-nodejs";

export class GetListRoomCommand implements Command {
  owner: Owner;
  limit: number;
  page: number;

  constructor(owner: Owner, limit: number, page: number) {
    this.owner = owner;
    this.limit = limit;
    this.page = page;
  }
}
