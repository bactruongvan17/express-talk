import { Request, Response } from "express";
import User from "../models/user.model";
import {
  checkUsernameExist,
  createUser,
  logIn as processLogin,
  getUserInfo as processGetUserInfo,
} from "./../services/user.service";

/**
 * Register new account
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const register = async (req: Request, res: Response) => {
  const { username, password, full_name } = req.body;

  try {
    const usernameExist = await checkUsernameExist(username);
    if (usernameExist) {
      throw new Error("username has exists");
    }

    const userDTO = new User({
      username,
      password,
      fullName: full_name,
    });
    const user = await createUser(userDTO);

    return res.status(200).json({
      message: "success",
      user,
    });
  } catch (e: any) {
    return res.status(e.code || 500).json({
      message: e.message,
    });
  }
};

/**
 * Log on to system
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const logIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const token = await processLogin(username, password);

    return res.json({
      message: "success",
      token,
    });
  } catch (e: any) {
    return res.status(e.code || 500).json({
      message: e.message,
    });
  }
};

/**
 * Get current user info
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getUserInfo = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const user = await processGetUserInfo(userId);

    return res.json({
      message: "success",
      user: {
        id: user._id,
        username: user.username,
        full_name: user.fullName,
        created_at: user.createdAt,
      },
    });
  } catch (e: any) {
    return res.status(e.code || 500).json({
      message: e.message,
    });
  }
};
