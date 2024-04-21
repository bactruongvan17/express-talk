import express, { Router } from "express";
import { authController } from "../dependencies";

const router: Router = express.Router();

router.post("/register", authController.register.bind(authController));
router.post("/login", authController.logIn.bind(authController));

export default router;
