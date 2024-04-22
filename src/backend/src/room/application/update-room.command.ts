import { Command } from "@bactv/command-bus-nodejs";
import { Owner } from "../domain/entity/owner.entity";
import { Member } from "../domain/entity/member.entity";

export class UpdateRoomCommand implements Command {
  constructor(
    public id: string,
    public name: string,
    public ownerId: string,
    public memberIds: string[],
  ) {}
}
