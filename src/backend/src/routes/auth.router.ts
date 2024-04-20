import express, { Router } from "express";
import { register, logIn } from "../controllers/user.controller";

const router: Router = express.Router();

router.post("/register", register);
router.post("/login", logIn);

export default router;
