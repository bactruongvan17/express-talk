import { Command } from "@bactv/command-bus-nodejs";

export class RegisterCommand implements Command {
  constructor(
    public username: string,
    public password: string,
    public fullName: string,
  ) {}
}
