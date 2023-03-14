// https://www.youtube.com/watch?v=0aPLk2e2Z3g&t=4864s

import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const elogin = (req, res) => {
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

export const clogin = (req, res) => {};

export const logout = (req, res) => {};
