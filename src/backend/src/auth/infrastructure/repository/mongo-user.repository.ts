import { Collection, ObjectId } from "mongodb";
import { User } from "../../domain/entity/user.entity";
import { UserRepository } from "../../domain/repository/user.repository";
import { Connection } from "../../../db/mongo-connection.db";
import NotFoundError from "../../../errors/not-found.error";

export class MongoUserRepository implements UserRepository {
  async getById(id: string): Promise<User> {
    const query = await Connection.getDb()
      .collection("users")
      .findOne({
        _id: new ObjectId(id),
      });

    if (!query) {
      throw new NotFoundError("user not found");
    }

    const user = new User(query.username, query.password, query.full_name);
    user.id = query._id.toString();

    return user;
  }

  async getByUsername(username: string): Promise<User> {
    const query = await Connection.getDb().collection("users").findOne({
      username,
    });

    if (!query) {
      throw new NotFoundError("user not found");
    }

    const user = new User(query.username, query.password, query.full_name);
    user.id = query._id.toString();

    return user;
  }

  async create(user: User): Promise<User> {
    const userDb = await Connection.getDb().collection("users").insertOne({
      username: user.username,
      password: user.password,
      full_name: user.fullName,
      created_at: new Date(),
    });

    user.id = userDb.insertedId.toString();

    return user;
  }

  async update(user: User) {
    await Connection.getDb()
      .collection("users")
      .updateOne(
        {
          _id: new ObjectId(user.id),
        },
        {
          $set: {
            full_name: user.fullName,
          },
        },
      );
  }

  async delete(user: User) {
    await Connection.getDb()
      .collection("users")
      .deleteOne({
        _id: new ObjectId(user.id),
      });
  }

  async checkUsernameExists(username: string): Promise<boolean> {
    const data = await Connection.getDb().collection("users").findOne({
      username,
    });

    return data !== null;
  }
}
