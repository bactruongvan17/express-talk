import CommandBus from "@bactv/command-bus-nodejs";
import { Request, Response } from "express";
import { RegisterCommand } from "../../application/register.command";
import { registerHandler } from "../dependencies";
import { User } from "../../domain/entity/user.entity";
import { LoginCommand } from "../../application/login.command";
import { loginHandler } from "../dependencies";

export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  async register(req: Request, res: Response) {
    const { username, password, full_name: fullName } = req.body;

    try {
      const command = new RegisterCommand(username, password, fullName);
      this.commandBus.subscribe(command, registerHandler);
      const data: User = await this.commandBus.dispatch(command);

      return res.json({
        message: "success",
        user: {
          id: data.id,
          username: data.username,
          full_name: data.fullName,
        },
      });
    } catch (e: any) {
      return res.status(e.code || 500).json({ message: e.message });
    }
  }

  async logIn(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const command = new LoginCommand(username, password);
      this.commandBus.subscribe(command, loginHandler);
      const { user, token }: { user: User, token: string } = await this.commandBus.dispatch(command);

      return res.json({
        message: "success",
        user: {
          id: user.id,
          username: user.username,
          full_name: user.fullName,
        },
        token,
      });
    } catch (e: any) {
      return res.status(e.code || 500).json({ message: e.message });
    }
  }
}
