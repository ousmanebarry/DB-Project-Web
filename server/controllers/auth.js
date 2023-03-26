import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
	let q = "CALL Customer_Login(?,?)";

	const username = "test";
	const password = "test";

	console.log(req);

	db.query(q, [username, password], (err, data) => {
		if (err) return res.status(err.code).json(err);
		if (data.length == 0) return res.status(404).json("User not found");

		// const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);

		if (password != data[0][0].Password)
			return res.status(400).json("Wrong username or password");

		res.json(data[0][0]);
	});
};

export const logout = (req, res) => {};
