import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

function Bookings() {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		fetchBookings();
	}, []);

	const fetchBookings = () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		fetch("http://localhost:8800/api/bookings", requestOptions)
			.then((response) => response.json())
			.then((data) => setBookings(data));
	};

	const rentRoom = (index) => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ bookingId: bookings[index].Booking_ID }),
		};

		fetch("http://localhost:8800/api/deleteBooking", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				toast.success("Moved To Rentings!");
				fetchBookings();
			});
	};

	return (
		<div>
			<h1 className="mb-2 ml-3 mt-3">
				<b>Bookings</b>
			</h1>
			<h2 className="ml-3 mb-4">{`${bookings.length} Booking(s)`}</h2>
			{bookings.map((b, index) => {
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
								<Button variant="primary" onClick={() => rentRoom(index)}>
									Rent
								</Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</div>
	);
}

export default Bookings;
