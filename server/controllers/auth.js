import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
	let q = "SELECT Password FROM Customer WHERE Username=?";

	const username = req.body.username;
	const password = req.body.password;

	// const hashed_password = bcrypt.hashSync(password, 10);

	db.query(q, username, (err, data) => {
		if (err) return res.json(err);
		if (data[0].length == 0) {
			return res.status(404).json("User does not exist");
		}

		const isPasswordCorrect = bcrypt.compareSync(password, data[0].Password);

		if (!isPasswordCorrect) {
			return res.json("Wrong password").status(403);
		}

		q = "CALL Employee_Info(?)";

		db.query(q, username, (err, data) => {
			if (err) return res.json(err);
			// if (data[0].length == 0) {
			// 	return res.status(404).json("User does not exist");
			// }

			return res.json(data);
		});
	});
};

export const logout = (req, res) => {};
