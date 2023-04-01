import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BookPage = () => {
	const history = useHistory();
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

		if (!name || !address || !sin || !startDate || !endDate) {
			toast.error("Empty Fields");
			return;
		}

		const checkOpts = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				roomId,
				hotelId,
				fday: startDate,
				lday: endDate,
			}),
		};

		fetch("http://localhost:8800/api/customer/checkBooking", checkOpts)
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
							roomId,
							hotelId,
							fday: startDate,
							lday: endDate,
							price,
						}),
					};

					fetch("http://localhost:8800/api/customer/book", requestOptions)
						.then((response) => response.json())
						.then((data) => {
							toast.success("Successfully Booked!");
							history.push("/");
						});
				} else {
					toast.error("Conflict For Selected Time Period");
				}
			});
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center vh-100">
			<Toaster />
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
				<li>
					<b>Phone:</b> {contactPhone}
				</li>
				<li>
					<b>Email:</b> {contactEmail}
				</li>
			</ul>
			<Form onSubmit={handleSubmit} req>
				<Form.Group controlId="name" aria-required={true}>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="address" aria-required={true}>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your address"
						value={address}
						onChange={(event) => setAddress(event.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="sin" aria-required={true}>
					<Form.Label>SIN</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your SIN"
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
				<Button variant="primary" type="submit" className="mt-3">
					Book
				</Button>
			</Form>
		</div>
	);
};

export default BookPage;
