import { Request, Response } from "express";
import { Verify } from "../utils/jwt.util";

export default () => {
  return (req: Request, res: Response, next: Function) => {
    let token = req.headers?.["authorization"]?.toString();
    if (!token) {
      return res.status(401).json({ message: "UnAuthorized" });
    }

    token = token.replace("Bearer", "").trim();

    try {
      const { userId } = Verify(token);
      if (!userId) {
        return res.status(401).json({ message: "UnAuthorized" });
      }

      req.userId = userId;

      next();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "UnAuthorized" });
    }
  };
};
