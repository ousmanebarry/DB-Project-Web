import express from "express";
import { searchRooms, book, checkBooking } from "../controllers/customer.js";

const router = express.Router();

router.post("/customer/searchRooms", searchRooms);

router.post("/customer/book", book);

router.post("/customer/checkBooking", checkBooking);

export default router;
