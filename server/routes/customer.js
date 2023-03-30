import express from "express";
import { searchRooms, searchRoom, book } from "../controllers/customer.js";

const router = express.Router();

router.get("/customer/searchRooms", searchRooms);

router.get("/customer/searchRoom", searchRoom);

router.post("/customer/book", book);

export default router;
