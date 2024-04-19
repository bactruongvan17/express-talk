import bcrypt from "bcrypt";

export const hash = async (stringValue) => {
  return bcrypt.hash(stringValue, 10);
};

export const verifyHash = async (hash, plainText) => {
  return await bcrypt.compare(plainText, hash);
};
