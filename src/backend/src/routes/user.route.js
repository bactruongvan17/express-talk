import express from "express";
import { register, logIn } from "./../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", logIn);

export default router;
