import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
	let q = "SELECT Password FROM USER WHERE Username=?";
	const { username, password } = req.body;
	const secretKey = "my-secret-key";

	db.query(q, username, (fErr, fResults) => {
		if (fErr) return res.status(404).json(fErr);

		q = "CALL Employee_Login(?)";

		db.query(q, username, (err, results) => {
			if (err) return res.status(404).json(err);

			const isLoggedIn = bcrypt.compareSync(password, fResults[0].Password);

			if (results[0].length > 0 && isLoggedIn) {
				const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
				res.json({ ...results[0], token });
			} else {
				res.status(401).json({ message: "Invalid credentials" });
			}
		});
	});
};

export const logout = (req, res) => {
	res.json("Logged out").status(200);
};
