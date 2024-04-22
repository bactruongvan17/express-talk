import express, { Router } from "express";
import { roomController } from "../dependencies";

const router: Router = express.Router();

router.get("/", roomController.index.bind(roomController));
router.post("/", roomController.create.bind(roomController));
router.get("/:id", roomController.detail.bind(roomController));
router.put("/:id", roomController.update.bind(roomController));
router.delete("/:id", roomController.delete.bind(roomController));

export default router;
