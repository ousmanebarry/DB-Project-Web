import db from "../db.js";

export const bookingInfo = (req, res) => {
	let q = "SELECT * FROM Booking_View";

	db.query(q, (err, results) => {
		if (err) return res.status(404).json(err);

		res.status(200).json(results);
	});
};

export const deleteBooking = (req, res) => {
	let q = "DELETE FROM Booking WHERE Booking_ID=?";

	db.query(q, req.body.bookingId, (err) => {
		if (err) return res.status(404).json(err);

		res.status(200).json("OK");
	});
};
