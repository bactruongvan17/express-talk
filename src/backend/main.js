import dbConnection from "./src/db/mongo.db.js";
import express from "express";
import userRouter from "./src/routes/user.route.js";
import authRouter from "./src/routes/auth.router.js";
import bodyParser from "body-parser";
import authMiddleware from "./src/middlewares/auth.middleware.js";

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("Hello World");
});

app.use("/", authRouter);
app.use(authMiddleware());
app.use("/users", userRouter);

app.listen(port, async () => {
  await dbConnection()
    .then(() =>
      console.log("Database connection had been initlized successful."),
    )
    .catch((err) => {
      console.log("Inilize database connection failed. Exit...");
      console.error(err);
      process.exit(500);
    });

  console.log(`ExpressTalk API is running on 0.0.0.0:${port}`);
});
