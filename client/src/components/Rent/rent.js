import "./rent.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";

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
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ rentingId: renting.Renting_ID }),
		};

		fetch("http://localhost:8800/api/deleteRenting", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setShow(false);
			});

		fetchRentings();
	};

	return (
		<div>
			{rentings.map((b, index) => {
				return (
					
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

						<Form.Group controlId="startDate" aria-required>
							<Form.Label>Start Date</Form.Label>
							<Form.Control
								type="date"
								value={startDate}
								onChange={(event) => setExpirationDate(event.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="endDate" aria-required>
							<Form.Label>End Date</Form.Label>
							<Form.Control
								type="date"
								value={endDate}
								onChange={(event) => setExpirationDate(event.target.value)}
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
