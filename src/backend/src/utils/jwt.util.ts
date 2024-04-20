import jwt from "jsonwebtoken";

export const Sign = (payload: any): string => {
  const secretKey: string = process.env.HASH_SALT || "";
  return jwt.sign(
    {
      data: payload,
    },
    secretKey,
    {
      expiresIn: Math.floor(Date.now() / 1000 + 2592000), // 1 month,
    },
  );
};

export const Verify = (token: string): any => {
  const secretKey: string = process.env.HASH_SALT || "";
  const data: any = jwt.verify(token, secretKey);
  return data.data;
};
