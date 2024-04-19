import User from "../models/user.model.js";
import { checkUsernameExist, createUser } from "./../services/user.service.js";

export const register = async (req, res) => {
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
        message: "Success",
        user
    });

  } catch (e) {
    return res.status(e.code || 500).json({
        message: e.message,
    })
  }
};

export const logIn = async (req, res) => {};
