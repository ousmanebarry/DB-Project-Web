import db from "../db.js";

export const profileInfo = (req, res) => {
	let q = "SELECT * FROM Profile_View";

	db.query(q, (err, results) => {
		if (err) return res.status(404).json(err);

		res.status(200).json(results[0]);
	});
};
