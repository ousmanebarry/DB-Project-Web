import { db } from "../db.js";

export const elogin = (req, res) => {
	let q = "CALL Employee_Login()";

	db.query(q, (err, data) => {
		if (err) return res.json(err);
		console.log(data);
	});
};

export const clogin = (req, res) => {};

export const logout = (req, res) => {};
