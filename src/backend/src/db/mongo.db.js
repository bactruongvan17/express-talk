import mongoose from "mongoose";

export default async () => {
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const user = process.env.DB_USER;
  const pass = encodeURIComponent(process.env.DB_PASS);
  const db = process.env.DB_NAME;

  const uri = `mongodb://${user}:${pass}@${host}:${port}/${db}`;
  await mongoose.connect(uri);
};
