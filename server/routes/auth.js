import express from "express";
import { elogin, clogin } from "../controllers/auth.js";

const router = express.Router();

router.get("/eauth", elogin);

router.get("/cauth", clogin);

export default router;
