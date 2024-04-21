import { User } from "../entity/user.entity";

export interface UserRepository {
  /**
   * Get user by id
   * @param id string
   * @throws NotFoundError
   * @return Promise<User>
   */
  getById(id: string): Promise<User>;

  /**
   * Get user by username
   * @param username string
   * @throws NotFoundError
   * @return Promise<User>
   */
  getByUsername(username: string): Promise<User>;

  /**
   * Create a new user
   * @param user User
   * @returns Promise<Room>
   */
  create(user: User): Promise<User>;

  /**
   * Update user
   * @param user User
   * @returns void
   */
  update(user: User): void;

  /**
   * Delete a chat room
   * @param user Room
   * @returns Promise<Room>
   */
  delete(user: User): void;

  /**
   * Check exist by username
   * @param username
   */
  checkUsernameExists(username: string): Promise<boolean>;
}
