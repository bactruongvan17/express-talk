import CommandBus from "@bactv/command-bus-nodejs";
import { Request, Response } from "express";
import { GetListRoomCommand } from "../../application/get-list-room.command";
import { Owner } from "../../domain/entity/owner.entity";
import { createRoomHandler, getListRoomHandler, updateRoomHandler, deleteRoomHandler } from "../dependencies";
import { CreateRoomCommand } from "../../application/create-room.command";
import { Room } from "../../domain/entity/room.entity";
import { UpdateRoomCommand } from "../../application/update-room.command";
import { Member } from "../../domain/entity/member.entity";
import { DeleteRoomCommand } from "../../application/delete-room.command";
import { RoomRepository } from "../../domain/repository/room.repository";

export class RoomController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly roomRepository: RoomRepository,
  ) {}

  /**
   * Get list rooms
   * @param req
   * @param res
   * @returns
   */
  async index(req: Request, res: Response) {
    const userId: string = req.userId;
    let limit: number = Number(req.params.limit) || 10;
    let page: number = Number(req.params.page) || 1;

    if (limit < 1) {
      limit = 10;
    }

    if (page < 1) {
      page = 1;
    }

    try {
      const command = new GetListRoomCommand(new Owner(userId), limit, page);
      this.commandBus.subscribe(command, getListRoomHandler);
      const data = await this.commandBus.dispatch(command);

      return res.json({
        message: "success",
        limit,
        page,
        data,
      });
    } catch (e: any) {
      return res.status(e.code || 500).json({ message: e.message });
    }
  }

  /**
   * Create a new chat room
   * @param req
   * @param res
   * @returns
   */
  async create(req: Request, res: Response) {
    const userId: string = req.userId;
    const { name, member_ids: memberIds } = req.body;

    try {
      const command = new CreateRoomCommand(name, userId, memberIds);
      this.commandBus.subscribe(command, createRoomHandler);
      const data: Room = await this.commandBus.dispatch(command);

      return res.json({
        message: "success",
        room: {
          id: data.id,
          name: data.name,
          member_ids: data.members.map((m: Member) => m.id),
        },
      });
    } catch (e: any) {
      return res.status(e.code || 500).json({ message: e.message });
    }
  }

  async detail(req: Request, res: Response) {
    const roomId: string = req.params.id;
    const userId: string = req.userId;

    try {
      const room: Room = await this.roomRepository.getById(roomId, new Owner(userId));

      return res.json({
        id: room.id,
        name: room.name,
        member_ids: room.members.map((m: Member) => m.id),
      });
    } catch (e: any) {
      return res.status(e.code || 500).json({ message: e.message });
    }
  }

  async update(req: Request, res: Response) {
    const roomId: string = req.params.id;
    const userId: string = req.userId;
    const { name, member_ids: memberIds } = req.body;
    
    try {
      const command = new UpdateRoomCommand(roomId, name, userId, memberIds);
      this.commandBus.subscribe(command, updateRoomHandler);
      const data: Room = await this.commandBus.dispatch(command);

      return res.json({
        message: "success",
        room: {
          id: data.id,
          name: data.name,
          member_ids: data.members.map((m: Member) => m.id),
        },
      });
    } catch (e: any) {
      return res.status(e.code || 500).json({ message: e.message });
    }
  }

  async delete(req: Request, res: Response) {
    const roomId: string = req.params.id;
    const userId: string = req.userId;

    try {
      const command = new DeleteRoomCommand(roomId, userId);
      this.commandBus.subscribe(command, deleteRoomHandler);
      await this.commandBus.dispatch(command);

      return res.json({
        message: "success",
      });
    } catch (e: any) {
      return res.status(e.code || 500).json({ message: e.message });
    }
  }
}
