import express from "express";
import { elogin, clogin, logout } from "../controllers/auth.js";

const router = express.Router();

router.get("/eauth", elogin);

router.get("/cauth", clogin);

router.get("/logout", logout);

export default router;
