import express from "express";
import { bookingInfo } from "../controllers/bookings.js";

const router = express.Router();

router.get("/bookings", bookingInfo);

export default router;
