import { Handler } from "@bactv/command-bus-nodejs";
import { RoomRepository } from "../domain/repository/room.repository";
import { Owner } from "../domain/entity/owner.entity";
import { Member } from "../domain/entity/member.entity";
import { UpdateRoomCommand } from "./update-room.command";
import { Room } from "../domain/entity/room.entity";

export class UpdateRoomHandler implements Handler {
  constructor(private readonly _roomRepository: RoomRepository) {}

  async handle(command: UpdateRoomCommand): Promise<Room> {
    const owner = new Owner(command.ownerId);

    const room = await this._roomRepository.getById(command.id, owner);

    // check mew room name exists
    if (room.name !== command.name) {
      const isNameExists = await this._roomRepository.checkNameExists(
        command.name,
        owner,
      );
      if (isNameExists) {
        throw new Error("Room name is exists");
      }
    }

    room.name = command.name;
    room.members = command.memberIds.map((m: string) => new Member(m));

    this._roomRepository.update(room);

    return room;
  }
}
