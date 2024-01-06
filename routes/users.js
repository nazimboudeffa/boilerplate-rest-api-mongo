import express from "express";
import { getUsers } from "../controllers/users.js";

const router = express.Router();

router.route("/list").get(getUsers);

export { router as usersRoutes };