import bcrypt from "bcrypt";
import { HashService } from "../../domain/service/hash.service";

export class BCryptHashService implements HashService {
  async encrypt<T>(data: T): Promise<string> {
    return bcrypt.hash(data as string | Buffer, 10);
  }

  async verify<T>(hash: string, origin: T): Promise<boolean> {
    return await bcrypt.compare(origin as string, hash);
  }
}
