import { Handler } from "@bactv/command-bus-nodejs";
import { RoomRepository } from "../domain/repository/room.repository";
import { Room } from "../domain/entity/room.entity";
import { CreateRoomCommand } from "./create-room.command";
import { Owner } from "../domain/entity/owner.entity";
import { Member } from "../domain/entity/member.entity";

export class CreateRoomHandler implements Handler {
  constructor(private readonly _roomRepository: RoomRepository) {}

  async handle(command: CreateRoomCommand): Promise<Room> {
    const owner = new Owner(command.ownerId);

    // check room name exists
    const isNameExists = await this._roomRepository.checkNameExists(
      command.name,
      owner,
    );
    if (isNameExists) {
      throw new Error("Room name is exists");
    }

    const room = new Room(
      command.name,
      owner,
      command.memberIds.map((m: string) => new Member(m)),
    );

    return this._roomRepository.create(room);
  }
}
