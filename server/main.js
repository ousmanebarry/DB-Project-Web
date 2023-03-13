import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Ottawa@2023',
});

connection.connect();

connection.query('SELECT * FROM hotel_management.Hotel_Chain', (err, res) => {
	if (err) console.log('There is an error: ' + err);
	console.log('The solution is: ', res);
});

connection.end();
