import db from "../db.js";

export const rentingInfo = (req, res) => {
	let q = "SELECT * FROM Renting_View";

	db.query(q, (err, results) => {
		if (err) return res.status(404).json(err);

		res.status(200).json(results);
	});
};

export const deleteRenting = (req, res) => {
	let q = "DELETE FROM Renting WHERE Renting_ID=?";

	db.query(q, req.body.rentingId, (err) => {
		if (err) return res.status(404).json(err);

		res.status(200).json("OK");
	});
};

export const rentNow = (req, res) => {
	let q = "CALL Customer_Renting(?,?,?,?,?,?)";

	const {} = req.body;

	db.query(q, []);
};
