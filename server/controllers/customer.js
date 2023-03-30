import db from "../db.js";

export const search = (req, res) => {
	let q = "CALL Search_Rooms(?,?,?,?,?,?)";

	const capacity = req.body.capacity;
	const area = req.body.area;
	const chainName = req.body.chainName;
	const category = req.body.category;
	const roomsCount = req.body.roomsCount;
	const price = req.body.price;

	db.query(
		q,
		[capacity, area, chainName, category, roomsCount, price],
		(err, results) => {
			if (err) res.json(err).status(404);

			res.json(results[0]).status(200);
		}
	);
};

export const book = (req, res) => {
	let q = "CALL Customer_Booking(?,?,?,?,?,?,?,?,?,@Customer_ID)";

	const name = req.body.name;
	const address = req.body.address;
	const sin = req.body.sin;
	const roomId = req.body.roomId;
	const hotelId = req.body.hotelId;
	const price = req.body.price;
	const regDate = new Date().toISOString().slice(0, 10); // req.body.regDate
	const fday = req.body.fday;
	const lday = req.body.lday;

	db.query(
		q,
		[name, address, sin, regDate, roomId, hotelId, fday, lday, price],
		(err) => {
			if (err) res.json(err).status(404);

			res.status(200);
		}
	);
};