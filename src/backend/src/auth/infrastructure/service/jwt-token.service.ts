import { TokenService } from "../../domain/service/token.service";
import jwt from "jsonwebtoken";

export class JwtTokenService implements TokenService {
  async Sign(payload: any): Promise<string> {
    const secretKey: string = process.env.HASH_SALT || "";
    return jwt.sign(
      {
        data: payload,
      },
      secretKey,
      {
        expiresIn: Math.floor(Date.now() / 1000 + 2592000), // 1 month,
      },
    );
  }

  async Verify(token: string): Promise<any> {
    const secretKey: string = process.env.HASH_SALT || "";
    const data: any = jwt.verify(token, secretKey);
    return data.data;
  }
}
