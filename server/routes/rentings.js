import express from "express";
import {
	rentingInfo,
	deleteRenting,
	rentNow,
} from "../controllers/rentings.js";

const router = express.Router();

router.get("/rentings", rentingInfo);

router.post("/deleteRenting", deleteRenting);

router.post("/rentNow", rentNow);

export default router;
