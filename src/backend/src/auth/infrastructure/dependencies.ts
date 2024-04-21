import CommandBus from "@bactv/command-bus-nodejs";
import { RegisterHandler } from "../application/register.handler";
import { AuthController } from "./http/auth.controller";
import { MongoUserRepository } from "./repository/mongo-user.repository";
import { JwtTokenService } from "./service/jwt-token.service";
import { LoginHandler } from "../application/login.handler";
import { UserRepository } from "../domain/repository/user.repository";

const getUserRepository = (): UserRepository => {
  return new MongoUserRepository();
};

export const getTokenService = () => {
  return new JwtTokenService();
};

const commandBus = new CommandBus();

export const registerHandler = new RegisterHandler(getUserRepository());
export const loginHandler = new LoginHandler(getUserRepository());

export const authController = new AuthController(commandBus);
