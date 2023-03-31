import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = (props) => {
	const [show, setShow] = useState(false);
	const [rooms, setRooms] = useState([]);
	const [room, setRoom] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = (idx) => {
		setRoom(rooms[idx]);
		setShow(true);
	};

	const [capacity, setCapacity] = useState("");
	const [area, setArea] = useState("");
	const [chainName, setChainName] = useState("");
	const [category, setCategory] = useState("");
	const [roomCount, setRoomCount] = useState("");
	const [price, setPrice] = useState("");

	useEffect(() => {
		fetchRooms({
			capacity: null,
			area: null,
			chainName: null,
			category: null,
			roomsCount: null,
			price: null,
		});
	}, []);

	const fetchRooms = (info) => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(info),
		};

		fetch("http://localhost:8800/api/customer/searchRooms", requestOptions)
			.then((response) => response.json())
			.then((data) => setRooms(data));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetchRooms({
			capacity: capacity ? capacity : null,
			area: area ? area : null,
			chainName: chainName ? chainName : null,
			category: category ? category : null,
			roomCount: roomCount ? roomCount : null,
			price: price ? price : null,
		});
	};

	const handleReset = () => {
		setCapacity("");
		setArea("");
		setChainName("");
		setCategory("");
		setRoomCount("");
		setPrice("");

		fetchRooms({
			capacity: null,
			area: null,
			chainName: null,
			category: null,
			roomsCount: null,
			price: null,
		});
	};

	const starArray = (rating) =>
		Array(5)
			.fill()
			.map((_, i) => {
				if (i < rating) {
					return <FaStar key={i} fill="#ffc107" />;
				} else {
					return <FaStar key={i} fill="#ccc" />;
				}
			});

	return (
		<>
			<Row className="mt-5">
				<Col md={2} className="ml-5">
					<Form onSubmit={handleSubmit}>
						<Form.Group
							controlId="capacity"
							className="mb-4"
							style={{ width: "15rem" }}
						>
							<Form.Label>
								<b>Capacity</b>
							</Form.Label>
							<Form.Control
								type="number"
								value={capacity}
								style={{ borderWidth: "medium" }}
								onChange={(event) => setCapacity(event.target.value)}
							/>
						</Form.Group>
						<Form.Group
							controlId="area"
							className="mb-4"
							style={{ width: "15rem" }}
						>
							<Form.Label>
								<b>Area</b>
							</Form.Label>
							<Form.Control
								type="text"
								value={area}
								style={{ borderWidth: "medium" }}
								onChange={(event) => setArea(event.target.value)}
							/>
						</Form.Group>
						<Form.Group
							controlId="chainName"
							className="mb-4"
							style={{ width: "15rem" }}
						>
							<Form.Label>
								<b>Chain Name</b>
							</Form.Label>
							<Form.Control
								as="select"
								value={chainName}
								style={{ borderWidth: "medium" }}
								onChange={(event) => setChainName(event.target.value)}
							>
								<option value="">Any</option>
								<option value="Marriott">Marriott</option>
								<option value="Cardinal">Cardinal</option>
								<option value="Four Seasons">Four Seasons</option>
								<option value="Hilton">Hilton</option>
								<option value="Wyndham">Wyndham</option>
							</Form.Control>
						</Form.Group>
						<Form.Group
							controlId="category"
							className="mb-4"
							style={{ width: "15rem" }}
						>
							<Form.Label>
								<b>Category</b>
							</Form.Label>
							<Form.Control
								as="select"
								value={category}
								style={{ borderWidth: "medium" }}
								onChange={(event) => setCategory(event.target.value)}
							>
								<option value="">Any</option>
								<option value="budget">Budget</option>
								<option value="resort">Resort</option>
								<option value="luxury">Luxury</option>
								<option value="motel">Motel</option>
							</Form.Control>
						</Form.Group>
						<Form.Group
							controlId="roomCount"
							className="mb-4"
							style={{ width: "15rem" }}
						>
							<Form.Label>
								<b>Room Count (More Than)</b>
							</Form.Label>
							<Form.Control
								type="number"
								value={roomCount}
								style={{ borderWidth: "medium" }}
								onChange={(event) => setRoomCount(event.target.value)}
							/>
						</Form.Group>
						<Form.Group
							controlId="price"
							className="mb-4"
							style={{ width: "15rem" }}
						>
							<Form.Label>
								<b>Price (Less Than)</b>
							</Form.Label>
							<Form.Control
								type="number"
								value={price}
								style={{ borderWidth: "medium" }}
								onChange={(event) => setPrice(event.target.value)}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Search
						</Button>{" "}
						<Button variant="secondary" type="button" onClick={handleReset}>
							Reset
						</Button>
					</Form>
				</Col>
				<Col md={8}>
					<Row>
						{rooms.length !== 0 ? (
							rooms.map((h, index) => {
								return (
									<Col md={6} lg={4} className="mb-4">
										<Card>
											<Card.Body>
												<Card.Title>
													<b>{`${h.Chain_Name} ${h.Category} Room #${h.Room_Number}`}</b>
												</Card.Title>
												<Card.Text>
													<ul key={h.roomId}>
														<li>Address: {h.Address}</li>
														<li>Capacity: {h.Capacity}</li>
														<li>Price: {`$${h.Price}`}</li>
														<li>Rating: {starArray(h.Rating)}</li>
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
								);
							})
						) : (
							<h2>
								<b>0 Results</b>
							</h2>
						)}

						<Modal show={show} onHide={handleClose}>
							<Modal.Header>
								<Modal.Title>{`${room.Chain_Name} ${room.Category} Room #${room.Room_Number}`}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<p>
									<b>Contact Email:</b> {room.Contact_Email}
								</p>
								<p>
									<b>Contact Phone:</b> {room.Contact_Phone}
								</p>
								<p>
									<b>Number of Rooms In Hotel:</b> {room.Room_Number}
								</p>
								<p>
									<b>Category:</b> {room.Category}
								</p>
								<p>
									<b>Chain Name:</b> {room.Chain_Name}
								</p>
								<p>
									<b>Room Amenities:</b> {room.Amenities}
								</p>
								<p>
									<b>Room Capacity:</b> {room.Capacity}
								</p>
								<p>
									<b>Room View:</b> {room.View}
								</p>
								<p>
									<b>Extendable:</b> {room.Extendable ? "Yes" : "No"}
								</p>
								<p>
									<b>Damage:</b> {room.Damage ? room.Damage : "No damage"}
								</p>
								<p>
									<b>Price:</b> {`$${room.Price}`}
								</p>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
								<Link
									to={{
										pathname: "/book",
										state: {
											chainName: room.Chain_Name,
											category: room.Category,
											roomNumber: room.Room_Number,
											price: room.Price,
											hAddress: room.Address,
											contactPhone: room.Contact_Phone,
											contactEmail: room.Contact_Email,
											capacity: room.Capacity,
											roomId: room.Room_ID,
											hotelId: room.Hotel_ID,
										},
									}}
								>
									<Button variant="primary">Book Room</Button>
								</Link>
							</Modal.Footer>
						</Modal>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default HomePage;
