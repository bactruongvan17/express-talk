import { Command } from "@bactv/command-bus-nodejs";
import { Owner } from "../domain/entity/owner.entity";
import { Member } from "../domain/entity/member.entity";

export class CreateRoomCommand implements Command {
  constructor(
    public name: string,
    public ownerId: string,
    public memberIds: string[],
  ) {}
}
