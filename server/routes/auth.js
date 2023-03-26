import express from "express";
import { login, logout } from "../controllers/auth.js";
import bodyParser from "body-parser";

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

export default router;
