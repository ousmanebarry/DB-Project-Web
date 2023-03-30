import express from "express";
import { search, book } from "../controllers/customer.js";

const router = express.Router();

router.get("/customer/search", search);

router.post("/customer/book", book);

export default router;
