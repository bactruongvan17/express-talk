import { Command } from "@bactv/command-bus-nodejs";

export class DeleteRoomCommand implements Command {
  constructor(
    public id: string,
    public ownerId: string,
  ) {}
}
