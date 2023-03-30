import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	// const hashed_password = bcrypt.hashSync(password, 10);

	return res.json({ username: username, password: password });
};

export const logout = (req, res) => {};
