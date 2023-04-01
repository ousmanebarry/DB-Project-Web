import express from "express";
import { rentingInfo, deleteRenting } from "../controllers/rentings.js";

const router = express.Router();

router.get("/rentings", rentingInfo);

router.post("/deleteRenting", deleteRenting);

export default router;
