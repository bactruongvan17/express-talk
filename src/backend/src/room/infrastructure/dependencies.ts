import CommandBus from "@bactv/command-bus-nodejs";
import { RoomRepository } from "../domain/repository/room.repository";
import { MongoRoomRepository } from "./repository/mongo-room.repository";
import { RoomController } from "./http/room.controller";
import { GetListRoomHander } from "../application/get-list-room.handler";
import { CreateRoomHandler } from "../application/create-room.handler";

const getRoomRepository = (): RoomRepository => {
  return new MongoRoomRepository();
};

const commandBus = new CommandBus();

export const getListRoomHandler = new GetListRoomHander(getRoomRepository());
export const createRoomHandler = new CreateRoomHandler(getRoomRepository());

export const roomController = new RoomController(commandBus);
