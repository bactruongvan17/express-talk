import express, { Router } from "express";
import { getUserInfo } from "./../controllers/user.controller";

const router: Router = express.Router();

router.get("/me", getUserInfo);

export default router;
