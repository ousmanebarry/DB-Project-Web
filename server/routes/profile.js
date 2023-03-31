import express from "express";
import { profileInfo } from "../controllers/profile.js";

const router = express.Router();

router.get("/profile", profileInfo);

export default router;
