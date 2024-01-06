import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.route("/sign-up").post(register);
router.route("/sign-in").post(login);

export { router as authRoutes };