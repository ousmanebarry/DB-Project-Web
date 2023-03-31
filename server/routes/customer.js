import express from "express";
import { searchRooms, searchRoom, book } from "../controllers/customer.js";

const router = express.Router();

router.post("/customer/searchRooms", searchRooms);

router.post("/customer/searchRoom", searchRoom);

router.post("/customer/book", book);

export default router;
