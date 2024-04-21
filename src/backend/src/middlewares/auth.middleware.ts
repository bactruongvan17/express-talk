import { Request, Response } from "express";
import { getTokenService } from "../auth/infrastructure/dependencies";

export default () => {
  return async (req: Request, res: Response, next: Function) => {
    let token = req.headers?.["authorization"]?.toString();
    if (!token) {
      return res.status(401).json({ message: "UnAuthorized" });
    }

    token = token.replace("Bearer", "").trim();

    try {
      const { userId } = await getTokenService().Verify(token);
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
