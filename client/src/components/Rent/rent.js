import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";

function Rentings() {
	const [rentings, setRentings] = useState([]);
	const [show, setShow] = useState(false);
	const [renting, setRenting] = useState({});
	const [startDate, setStartDate] = useState({});
	const [endDate, setEndDate] = useState({});

	const [name, setName] = useState("");
	const [hotel, setHotel] = useState(1);
	const [room, setRoom] = useState(1);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		fetchRentings();
	}, []);

	const fetchRentings = () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		fetch("http://localhost:8800/api/rentings", requestOptions)
			.then((response) => response.json())
			.then((data) => setRentings(data));
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

		fetchRentings();
	};

	const rentNow = () => {
		setShow(true);
	};

	return (
		<div>
			<Button variant="primary" onClick={rentNow}>
				Rent Now
			</Button>
			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header>
					<Modal.Title>{"Rent A Room Now"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="name" aria-required>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your name"
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="hotel" aria-required>
							<Form.Label>Hotel ID</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter the hotel id"
								value={hotel}
								onChange={(event) => setHotel(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="room" aria-required>
							<Form.Label>Room ID</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter the room id"
								value={room}
								onChange={(event) => setRoom(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="price" aria-required>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter the price"
								value={price}
								onChange={(event) => setPrice(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="startDate" aria-required>
							<Form.Label>Start Date</Form.Label>
							<Form.Control
								type="date"
								value={startDate}
								onChange={(event) => setStartDate(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="endDate" aria-required>
							<Form.Label>End Date</Form.Label>
							<Form.Control
								type="date"
								value={endDate}
								onChange={(event) => setEndDate(event.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleSubmit}>
						Rent Now
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Rentings;
