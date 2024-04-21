import { RoomRepository } from "../domain/repository/room.repository";
import { GetListRoomCommand } from "./get-list-room.command";
import { Handler } from "@bactv/command-bus-nodejs";

export class GetListRoomHander implements Handler {
  constructor(private readonly roomRepository: RoomRepository) {}

  async handle(command: GetListRoomCommand): Promise<any> {
    return await this.roomRepository.getLists(command);
  }
}
