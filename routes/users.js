import express from "express";
import { getUsers, loginUser, registerUser } from "../controllers/users.js";

const router = express.Router();

router.route("/users").get(getUsers);
router.route("/sign-up").post(registerUser);
router.route("/sign-in").post(loginUser);

export { router as usersRoutes };