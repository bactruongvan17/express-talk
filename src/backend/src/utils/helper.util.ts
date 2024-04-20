import bcrypt from "bcrypt";

export const hash = async (stringValue: string): Promise<string> => {
  return bcrypt.hash(stringValue, 10);
};

export const verifyHash = async (hash: string, plainText: string): Promise<boolean> => {
  return await bcrypt.compare(plainText, hash);
};
