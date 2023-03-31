import express from "express";
import { searchRooms, book } from "../controllers/customer.js";

const router = express.Router();

router.post("/customer/searchRooms", searchRooms);

router.post("/customer/book", book);

export default router;
