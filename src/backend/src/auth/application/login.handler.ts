import { Handler } from "@bactv/command-bus-nodejs";
import { UserRepository } from "../domain/repository/user.repository";
import { LoginCommand } from "./login.command";
import { User } from "../domain/entity/user.entity";
import { getHashService } from "../../utils/infrastructure/depdencies";
import UnAuthorizedError from "../../errors/unauthorized.error";
import { getTokenService } from "../infrastructure/dependencies";

export class LoginHandler implements Handler {
  constructor(private readonly _userRepository: UserRepository) {}

  async handle(command: LoginCommand): Promise<{ user: User, token: string }> {
    const user: User = await this._userRepository.getByUsername(
      command.username,
    );
    console.log(user);
    

    const isPasswordVerified = await getHashService().verify(
      user.password,
      command.password,
    );
    
    if (!isPasswordVerified) {
      throw new UnAuthorizedError("account invalid");
    }

    // generate token
    const payload = {
      userId: user.id,
    };

    const token = await getTokenService().Sign(payload);

    return {
      user,
      token,
    }
  }
}
