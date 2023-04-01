import express from "express";
import {
	rentingInfo,
	deleteRenting,
	rentNow,
	employeeRooms,
	employeeRent,
} from "../controllers/rentings.js";

const router = express.Router();

router.get("/rentings", rentingInfo);

router.post("/deleteRenting", deleteRenting);

router.post("/rentNow", rentNow);

router.post("/employeeRooms", employeeRooms);

router.post("/employeeRent", employeeRent);

export default router;
