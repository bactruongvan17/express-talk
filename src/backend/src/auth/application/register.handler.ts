import { Handler } from "@bactv/command-bus-nodejs";
import { UserRepository } from "../domain/repository/user.repository";
import { RegisterCommand } from "./register.command";
import { User } from "../domain/entity/user.entity";
import { getHashService } from "../../utils/infrastructure/depdencies";

export class RegisterHandler implements Handler {
  constructor(private readonly _userRepository: UserRepository) {}

  async handle(command: RegisterCommand): Promise<User> {
    const isUsernameExists = await this._userRepository.checkUsernameExists(
      command.username,
    );
    if (isUsernameExists) {
      throw new Error("username exists");
    }

    const passwordIsHashed = await getHashService().encrypt(command.password);

    const user = new User(command.username, passwordIsHashed, command.fullName);

    return this._userRepository.create(user);
  }
}
