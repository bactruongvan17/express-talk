import express, { Router } from "express";
import { roomController } from "../dependencies";

const router: Router = express.Router();

router.get("/", roomController.index.bind(roomController));
router.post("/", roomController.create.bind(roomController));

export default router;
