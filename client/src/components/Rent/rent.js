import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";

function Rentings() {
	const [rooms, setRooms] = useState([]);
	const [show, setShow] = useState(false);
	const [renting, setRenting] = useState({});
	const [startDate, setStartDate] = useState({});
	const [endDate, setEndDate] = useState({});

	const [name, setName] = useState("");
	const [hotel, setHotel] = useState(1);
	const [room, setRoom] = useState(1);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = () => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ hotelId: 1 }),
		};

		fetch("http://localhost:8800/api/employeeRooms", requestOptions)
			.then((response) => response.json())
			.then((data) => setRooms(data));
	};

	const handleSubmit = () => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ rentingId: renting.Renting_ID }),
		};

		fetch("http://localhost:8800/api/rentNow", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setShow(false);
			});

		fetchRooms();
	};

	return (
		<div>
			<h1 className="mb-2 ml-3 mt-3">
				<b>Rent Now</b>
			</h1>
			<h2 className="ml-3 mb-4">{`${rooms.length} Available Room(s)`}</h2>
			{rooms.map((h, index) => {
				return (
					<Col md={6} lg={4} className="mb-4">
						<Card>
							<Card.Body>
								<Card.Title>
									<b>{`${h.Chain_Name} ${h.Category} Room #${h.Room_Number}`}</b>
								</Card.Title>
								<Card.Text>
									<ul key={h.roomId}>
										<li>Capacity: {h.Capacity}</li>
										<li>Price: {`$${h.Price}`}</li>
									</ul>
								</Card.Text>
								<Button variant="primary">Rent Now</Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</div>
	);
}

export default Rentings;
