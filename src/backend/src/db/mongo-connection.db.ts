import { Db, MongoClient } from "mongodb";

export class Connection {
  private static connection: MongoClient;

  private static db: Db;

  private constructor() {}

  /**
   * Connect to mongo
   */
  static async connect() {
    if (Connection.connection) {
      return;
    }

    const host: string = process.env.DB_HOST?.toString() || "";
    const port: string = process.env.DB_PORT?.toString() || "";
    const user: string = process.env.DB_USER?.toString() || "";
    const pass: string = encodeURIComponent(process.env.DB_PASS || "");
    const db: string = process.env.DB_NAME?.toString() || "";

    const uri = `mongodb://${user}:${pass}@${host}:${port}/${db}`;

    Connection.connection = await MongoClient.connect(uri);
  }

  /**
   * Get Database
   * @returns Db
   */
  static getDb(): Db {
    if (!Connection.db) {
      Connection.db = Connection.connection.db();
    }

    return Connection.db;
  }
}
