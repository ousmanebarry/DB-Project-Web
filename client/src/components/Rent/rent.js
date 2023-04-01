import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

function Rentings() {
	const [rooms, setRooms] = useState([]);
	const [room, setRoom] = useState([]);
	const [show, setShow] = useState(false);
	const [renting, setRenting] = useState({});
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [address, setAddress] = useState("");
	const [sin, setSin] = useState("");
	const [name, setName] = useState("");

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

	const handleShow = (index) => {
		setRoom(rooms[index]);
		setShow(true);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!name || !address || !sin || !startDate || !endDate) {
			toast.error("Empty Fields");
			return;
		}

		const checkOpts = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				roomId: room.Room_ID,
				hotelId: room.Hotel_ID,
				fday: startDate,
				lday: endDate,
			}),
		};

		fetch("http://localhost:8800/api/checkRenting", checkOpts)
			.then((response) => response.json())
			.then((data) => {
				if (data.length === 0) {
					const requestOptions = {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name,
							address,
							sin,
							roomId: room.Room_ID,
							hotelId: room.Hotel_ID,
							fday: startDate,
							lday: endDate,
							price: room.Price,
						}),
					};

					fetch("http://localhost:8800/api/employeeRent", requestOptions)
						.then((response) => response.json())
						.then((data) => {
							toast.success("Moved To Rentings!");
							setShow(false);
						});
				} else {
					toast.error("Conflict For Selected Time Period");
				}
			});
	};

	return (
		<div>
			<Toaster />
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
								<Button variant="primary" onClick={() => handleShow(index)}>
									Rent Now
								</Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
			<Modal show={show} onHide={() => setShow(false)}>
				<Toaster />
				<Modal.Header>
					<Modal.Title>{`${room.Chain_Name} ${room.Category} Room #${room.Room_Number}`}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="name" aria-required>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter customer name"
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="address" aria-required={true}>
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter customer address"
								value={address}
								onChange={(event) => setAddress(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="sin" aria-required={true}>
							<Form.Label>SIN</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter customer SIN"
								value={sin}
								onChange={(event) => setSin(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="startDate" aria-required={true}>
							<Form.Label>Start Date</Form.Label>
							<Form.Control
								type="date"
								value={startDate}
								onChange={(event) => setStartDate(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="endDate" aria-required={true}>
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
