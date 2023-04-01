import express from "express";
import { bookingInfo, deleteBooking } from "../controllers/bookings.js";

const router = express.Router();

router.get("/bookings", bookingInfo);

router.post("/deleteBooking", deleteBooking);

export default router;
