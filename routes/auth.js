import express from "express";
import { loginUser, registerUser } from "../controllers/auth.js";

const router = express.Router();

router.route("/sign-up").post(registerUser);
router.route("/sign-in").post(loginUser);

export { router as authRoutes };