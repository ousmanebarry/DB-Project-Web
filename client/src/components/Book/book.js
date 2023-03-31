import "./book.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const BookPage = (props) => {
	const [isBooked, setIsBooked] = useState(false);

	const location = useLocation();
	const {
		chainName,
		category,
		roomNumber,
		price,
		hAddress,
		contactPhone,
		contactEmail,
		roomId,
		hotelId,
		capacity,
	} = location.state;

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [sin, setSin] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Add code here to handle form submission
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				address,
				sin,
				roomId,
				hotelId,
				fday: startDate,
				lday: endDate,
				price,
			}),
		};

		fetch("http://localhost:8800/api/customer/book", requestOptions).then(
			(response) => {
				if (response.status === 200) {
					setIsBooked(true);
				}
			}
		);
	};

	return isBooked === false ? (
		<div className="d-flex flex-column align-items-center justify-content-center vh-100">
			<h4 className="text-center mb-4">
				<b>{`${chainName} ${category} Room #${roomNumber} Booking`}</b>
			</h4>
			<ul>
				<li>
					<b>Address:</b> {hAddress}
				</li>
				<li>
					<b>Capacity:</b> {capacity}
				</li>
				<li>
					<b>Price:</b> {`$${price}`}
				</li>
			</ul>
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
				<Form.Group controlId="address" aria-required>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your address"
						value={address}
						onChange={(event) => setAddress(event.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="sin" aria-required>
					<Form.Label>SIN</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your SIN"
						value={sin}
						onChange={(event) => setSin(event.target.value)}
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
				<Button variant="primary" type="submit" className="mt-3">
					Book
				</Button>
			</Form>
		</div>
	) : (
		<h1>Booking confirmed</h1>
	);
};

export default BookPage;
