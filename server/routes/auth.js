import express from "express";

const router = express.Router();

router.get("/eauth", (req, res) => {
	res.json("Employee login");
});

router.get("/cauth", (req, res) => {
	res.json("Customer login");
});

export default router;
