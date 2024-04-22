import CommandBus from "@bactv/command-bus-nodejs";
import { RoomRepository } from "../domain/repository/room.repository";
import { MongoRoomRepository } from "./repository/mongo-room.repository";
import { RoomController } from "./http/room.controller";
import { GetListRoomHander } from "../application/get-list-room.handler";
import { CreateRoomHandler } from "../application/create-room.handler";
import { UpdateRoomHandler } from "../application/update-room.handler";
import { DeleteRoomHandler } from "../application/delete-room.handler";

const getRoomRepository = (): RoomRepository => {
  return new MongoRoomRepository();
};

const commandBus = new CommandBus();

const roomRepository: RoomRepository = getRoomRepository();

export const getListRoomHandler = new GetListRoomHander(roomRepository);
export const createRoomHandler = new CreateRoomHandler(roomRepository);
export const updateRoomHandler = new UpdateRoomHandler(roomRepository);
export const deleteRoomHandler = new DeleteRoomHandler(roomRepository);

export const roomController = new RoomController(commandBus, roomRepository);
