import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
	let q = "CALL Employee_Login(?)";

	db.query(q, req.body.username, (err, data) => {
		if (err) return res.json(err);
		if (data.length == 0) return res.status(404).json("User not found");

		const isPasswordCorrect = bcrypt.compareSync(
			req.body.passwod,
			data[0].password
		);

		if (!isPasswordCorrect)
			return res.status(400).json("Wrong username or password");

		console.log(data);
	});
};

export const logout = (req, res) => {};
