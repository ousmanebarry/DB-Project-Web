import db from "../db.js";

export const rentingInfo = (req, res) => {
	let q = "SELECT * FROM Renting_View";

	db.query(q, (err, results) => {
		if (err) return res.status(404).json(err);

		res.status(200).json(results);
	});
};
