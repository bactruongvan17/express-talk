import { Command } from "@bactv/command-bus-nodejs";

export class CreateRoomCommand implements Command {
  constructor(
    public name: string,
    public ownerId: string,
    public memberIds: string[],
  ) {}
}
