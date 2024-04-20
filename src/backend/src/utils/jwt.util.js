import jwt from "jsonwebtoken";

export const Sign = (payload) => {
  const secretKey = process.env.HASH_SALT;
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

export const Verify = (token) => {
  const secretKey = process.env.HASH_SALT;
  const { data } = jwt.verify(token, secretKey);
  return data;
};
