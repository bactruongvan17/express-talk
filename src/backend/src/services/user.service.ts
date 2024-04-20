import User from "./../models/user.model";
import { hash, verifyHash } from "./../utils/helper.util";
import NotFoundError from "../errors/not-found.error";
import UnAuthorizedError from "../errors/unauthorized.error";
import { Sign } from "../utils/jwt.util";

export const checkUsernameExist = async (username: string): Promise<any> => {
  return await User.findOne({ username }).exec();
};

export const createUser = async (userDTO: any): Promise<any> => {
  const password = await hash(userDTO.password);
  const user = new User({
    username: userDTO.username,
    password: password,
    fullName: userDTO.fullName,
    createdAt: new Date(),
  });

  return await user.save();
};

export const logIn = async (username: string, password: string): Promise<string> => {
  const user = await User.findOne({ username }).exec();
  if (!user) {
    throw new NotFoundError("user not found");
  }

  const validatePassword = await verifyHash(user.password, password);
  if (!validatePassword) {
    throw new UnAuthorizedError("account invalid");
  }

  // generate token
  const token = Sign({ userId: user._id });

  return token;
};

/**
 * Get User Info
 * @param {*} userId
 * @returns
 */
export const getUserInfo = async (userId: string): Promise<any> => {
  const user = await User.findById(userId).exec();
  if (!user) {
    throw new NotFoundError("user not found");
  }

  return user;
};
