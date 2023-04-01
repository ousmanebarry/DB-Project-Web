import "./employee.css";
import React, { useState, useEffect } from "react";

function Employee() {
	const [bookings, setBookings] = useState([]);
	
	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			
		};

		fetch("http://localhost:8800/api/bookings", requestOptions)
			.then((response) => response.json())
			.then((data) => setBookings(data));
	};

	return (
		<div>
			{bookings.map((b, index) => {
				return <Col md={6} lg={4} className="mb-4">
				<Card>
					<Card.Body>
						<Card.Title>
							<b>{`${b.Full_name}`}</b>
						</Card.Title>
						<Card.Text>
						<b>{`${b.Chain_Name} ${b.Category} Room #${b.Room_Number}`}</b>
							<ul key={h.roomId}>
								<li>First_Days: {b.First_Days}</li>
								<li>Last_Day: {b.Last_Day}</li>
								<li>Price: {`$${b.Price}`}</li>
							</ul>
						</Card.Text>
						<Button
							variant="primary"
							onClick={() => handleShow(index)}
						>
							More Info
						</Button>
					</Card.Body>
				</Card>
			</Col>
			})}
         </div>
	);
}

export default Employee;
