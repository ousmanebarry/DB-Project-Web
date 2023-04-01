import "./rentings.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";

function Rentings() {
	const [rentings, setRentings] = useState([]);
    const [show, setShow] = useState(false);

	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		fetch("http://localhost:8800/api/rentings", requestOptions)
			.then((response) => response.json())
			.then((data) => setRentings(data));
	};

	return (
		<div>
			{rentings.map((b, index) => {
				return (
					<Col md={6} lg={4} className="mb-4">
						<Card>
							<Card.Body>
								<Card.Title>
									<b>{`${b.Full_name}`}</b>
								</Card.Title>
								<Card.Text>
									<b>{`${b.Chain_Name} ${b.Category} Room #${b.Room_Number}`}</b>
									<ul key={b.roomId}>
										<li>First_Days: {b.First_Day}</li>
										<li>Last_Day: {b.Last_Day}</li>
										<li>Price: {`$${b.Price}`}</li>
									</ul>
								</Card.Text>
								<Button variant="primary" onClick={() => setShow(true)}>Pay</Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
            <Modal show={show} onHide={() => setShow(false)}>
							<Modal.Header>
								<Modal.Title>{`${room.Chain_Name} ${room.Category} Room #${room.Room_Number}`}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
                            <Form onSubmit={handleSubmit}>
				<Form.Group controlId="name" aria-required>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</Form.Group>
                <Form.Group controlId="card_number" aria-required>
					<Form.Label>Card Number</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your SIN"
						value={card_number}
						onChange={(event) => setSin(event.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="address" aria-required>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your address"
						value={address}
						onChange={(event) => setAddress(event.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="mt-3">
					Pay
				</Button>
			</Form>
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
		</div>
	);
}

export default Rentings;
