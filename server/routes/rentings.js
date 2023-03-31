import express from "express";
import { rentingInfo } from "../controllers/rentings.js";

const router = express.Router();

router.get("/rentings", rentingInfo);

export default router;
