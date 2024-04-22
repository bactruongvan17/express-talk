import { GetListRoomCommand } from "../../application/get-list-room.command";
import { Owner } from "../../domain/entity/owner.entity";
import { Room } from "../../domain/entity/room.entity";
import { RoomRepository } from "../../domain/repository/room.repository";
import { Connection } from "../../../db/mongo-connection.db";
import { ObjectId } from "mongodb";
import NotFoundError from "../../../errors/not-found.error";
import { Member } from "../../domain/entity/member.entity";

export class MongoRoomRepository implements RoomRepository {
  /**
   * Get list rooms by owner
   * @param filter
   * @returns
   */
  async getLists(filter: GetListRoomCommand): Promise<Array<any>> {
    const query = await Connection.getDb()
      .collection("rooms")
      .find({
        owner_id: filter.owner.id,
      })
      .limit(filter.limit)
      .skip(filter.limit * (filter.page - 1))
      .toArray();

    return query.map((item: any) => {
      return {
        id: item._id,
        name: item.name,
        member_ids: item.member_ids,
      }
    });
  }

  /**
   * Get by id
   * @param id
   * @param owner
   */
  async getById(id: string, owner: Owner): Promise<Room> {
    const query = await Connection.getDb()
      .collection("rooms")
      .findOne({
        _id: new ObjectId(id),
        owner_id: new ObjectId(owner.id),
      });

    if (!query) {
      throw new NotFoundError("Room not found");
    }

    const room = new Room(
      query.name,
      owner,
      query.member_ids.map((m: string) => new Member(m)),
    );
    room.id = id;

    return room;
  }

  /**
   * Create room
   * @param room
   */
  async create(room: Room): Promise<Room> {
    const roomDb = await Connection.getDb()
      .collection("rooms")
      .insertOne({
        name: room.name,
        owner_id: new ObjectId(room.owner.id),
        member_ids: room.members.map((m: Member) => new ObjectId(m.id)),
      });

    room.id = roomDb.insertedId.toString();

    return room;
  }

  /**
   * Update room
   * @param room
   */
  async update(room: Room) {
    await Connection.getDb()
      .collection("rooms")
      .updateOne(
        {
          _id: new ObjectId(room.id),
        },
        {
          $set: {
            name: room.name,
            member_ids: room.members.map((m: Member) => new ObjectId(m.id)),
          },
        },
      );
  }

  /**
   * Delete room
   * @param room
   */
  async delete(room: Room) {
    await Connection.getDb()
      .collection("rooms")
      .deleteOne({ _id: new ObjectId(room.id) });
  }

  /**
   * Check room name exists by owner
   * @param name
   * @param owner
   */
  async checkNameExists(name: string, owner: Owner): Promise<boolean> {
    const doc = await Connection.getDb().collection("rooms").findOne({
      owner_id: new ObjectId(owner.id),
      name,
    });

    return doc !== null;
  }
}
