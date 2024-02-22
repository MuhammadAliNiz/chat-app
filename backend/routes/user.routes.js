import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebae } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebae);

export default router;
