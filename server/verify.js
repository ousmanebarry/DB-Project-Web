import db from "./db.js";

export const verifyToken = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];

	db.query(
		"SELECT * FROM token_blacklist WHERE token = ?",
		[token],
		(err, results) => {
			if (err) return res.status(404).json(err);

			if (results[0].length > 0) {
				res.status(401).json({ message: "Invalid token" });
			} else {
				next();
			}
		}
	);
};
