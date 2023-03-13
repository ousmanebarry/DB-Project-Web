import mysql from "mysql2";

const connection = mysql.createConnection({
	host: "sql9.freesqldatabase.com",
	user: "sql9605441",
	password: "Hs3TwsUyfl",
});

connection.connect();

connection.query("SELECT * FROM sql9605441.Hotel_Chain", (err, res) => {
	if (err) console.log("There is an error: " + err);
	console.log("The solution is: ", res);
});

connection.end();
