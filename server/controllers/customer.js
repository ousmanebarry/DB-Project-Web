import db from "../db.js";

export const searchRooms = (req, res) => {
	let q = "CALL Search_Rooms(?,?,?,?,?,?)";

	const { capacity, area, chainName, category, roomsCount, price } = req.body;

	db.query(
		q,
		[capacity, area, chainName, category, roomsCount, price],
		(err, results) => {
			if (err) return res.json(err).status(404);

			res.json(results[0]).status(200);
		}
	);
};

export const book = (req, res) => {
	let q = "CALL Customer_Booking(?,?,?,?,?,?,?,?,?,@Customer_ID)";

	// store hotel and room id in react card
	const { name, address, sin, roomId, hotelId, price, fday, lday } = req.body;
	const regDate = new Date().toISOString().slice(0, 10);

	db.query(
		q,
		[name, address, sin, regDate, roomId, hotelId, fday, lday, price],
		(err) => {
			if (err) return res.json(err).status(404);

			res.status(200).json("OK");
		}
	);
};

export const checkBooking = (req, res) => {
	let q = "CALL Check_Booking(?,?,?,?)";

	const { roomId, hotelId, fday, lday } = req.body;

	db.query(q, [roomId, hotelId, fday, lday], (err, results) => {
		if (err) return res.status(404).json(err);

		res.status(200).json(results[0]);
	});
};
