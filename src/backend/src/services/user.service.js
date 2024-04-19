import User from "./../models/user.model.js";
import { hash, verifyHash } from "./../utils/helper.util.js";
import NotFoundError from "../errors/not-found.error.js";
import UnAuthorizedError from "../errors/unauthorized.error.js";

export const checkUsernameExist = async (username) => {
  return await User.findOne({ username }).exec();
};

export const createUser = async (userDTO) => {
  const password = await hash(userDTO.password);
  const user = new User({
    username: userDTO.username,
    password: password,
    fullName: userDTO.fullName,
    createdAt: new Date(),
  });

  return await user.save();
};

export const logIn = async (username, password) => {
  const user = await User.findOne({ username }).exec();
  if (!user) {
    throw new NotFoundError("user not found");
  }

  const validatePassword = await verifyHash(user.password, password);
  if (!validatePassword) {
    throw new UnAuthorizedError("account invalid");
  }

  return user;
};
