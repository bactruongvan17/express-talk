import { Command } from "@bactv/command-bus-nodejs";

export class LoginCommand implements Command {
  constructor(
    public username: string,
    public password: string,
  ) {}
}
