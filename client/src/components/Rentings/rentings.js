import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

function Rentings() {
	const [rentings, setRentings] = useState([]);
	const [show, setShow] = useState(false);
	const [renting, setRenting] = useState({});

	const [name, setName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
	const [cvc, setCvc] = useState("");

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

	const handleShow = (index) => {
		setRenting(rentings[index]);
		setShow(true);
	};

	const handleSubmit = () => {
		if (!name || !cardNumber || !expirationDate || !cvc) {
			toast.error("Empty Fields");
			return;
		}

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ rentingId: renting.Renting_ID }),
		};

		fetch("http://localhost:8800/api/deleteRenting", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				setShow(false);
				toast.success("Room Paid For!");
				fetchRentings();
			});
	};

	return (
		<div>
			<h1 className="mb-2 ml-3 mt-3">
				<b>Rentings</b>
			</h1>
			<h2 className="ml-3 mb-4">{`${rentings.length} Renting(s)`}</h2>
			{rentings.map((b, index) => {
				return (
					<Col md={6} lg={4} className="mb-4">
						<Toaster />
						<Card>
							<Card.Body>
								<Card.Title>
									<b>{`${b.Full_name}`}</b>
								</Card.Title>
								<Card.Text>
									<h4>{`${b.Chain_Name} ${b.Category} Room #${b.Room_Number}`}</h4>
									<p>First Day: {b.First_Day.split("T")[0]}</p>
									<p>Last Day: {b.Last_Day.split("T")[0]}</p>
									<p>Price: {`$${b.Price}`}</p>
								</Card.Text>
								<Button variant="primary" onClick={() => handleShow(index)}>
									Pay For Room
								</Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header>
					<Modal.Title>{`${renting.Chain_Name} ${renting.Category} Room #${renting.Room_Number}`}</Modal.Title>
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

						<Form.Group controlId="cardNumber" aria-required>
							<Form.Label>Card Number</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter your card number"
								value={cardNumber}
								onChange={(event) => setCardNumber(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="expirationDate" aria-required>
							<Form.Label>Expiration Date</Form.Label>
							<Form.Control
								type="date"
								value={expirationDate}
								onChange={(event) => setExpirationDate(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="CVC" aria-required>
							<Form.Label>CVC</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter your CVC"
								value={cvc}
								onChange={(event) => setCvc(event.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleSubmit}>
						Pay For Room
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Rentings;
