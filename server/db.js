import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
	host: process.env.host,
	user: process.env.user,
	password: process.env.password,
	database: process.env.database,
});

// connection.query("SELECT * FROM hotel_chain", (err, res) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}

// 	console.log(res);
// });

// connection.end();

export default connection;
