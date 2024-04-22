import { Handler } from "@bactv/command-bus-nodejs";
import { RoomRepository } from "../domain/repository/room.repository";
import { Owner } from "../domain/entity/owner.entity";
import { DeleteRoomCommand } from "./delete-room.command";

export class DeleteRoomHandler implements Handler {
  constructor(private readonly _roomRepository: RoomRepository) {}

  async handle(command: DeleteRoomCommand) {
    const owner = new Owner(command.ownerId);

    const room = await this._roomRepository.getById(command.id, owner);

    this._roomRepository.delete(room);
  }
}
