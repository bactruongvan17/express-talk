import { GetListRoomCommand } from "../../application/get-list-room.command";
import { Owner } from "../entity/owner.entity";
import { Room } from "../entity/room.entity";

export interface RoomRepository {
  /**
   *
   * @param filter GeListRoomCommand
   */
  getLists(filter: GetListRoomCommand): Promise<Array<any>>;

  /**
   * Get chat room by id and owner
   * @param id string
   * @param owner Owner
   * @throws NotFoundError
   * @return Promise<Room>
   */
  getById(id: string, owner: Owner): Promise<Room>;

  /**
   * Create a new chat room
   * @param room Room
   * @returns Promise<Room>
   */
  create(room: Room): Promise<Room>;

  /**
   * Update a chat room
   * @param room Room
   * @returns void
   */
  update(room: Room): void;

  /**
   * Delete a chat room
   * @param room Room
   * @returns Promise<Room>
   */
  delete(room: Room): void;

  /**
   * Check room name exists by owner
   * @param name
   * @param owner
   */
  checkNameExists(name: string, owner: Owner): Promise<boolean>;
}
