import "./profile.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";

function Profile() {
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		fetch("http://localhost:8800/api/profile", requestOptions)
			.then((response) => response.json())
			.then((data) => setProfile(data));
	};

	return (
		<div>
			{profile.map((b, index) => {
				return (
					<Col md={6} lg={4} className="mb-4">
						<Card>
							<Card.Body>
								<Card.Title>
									<b>{`${b.Full_Name}`}</b>
								</Card.Title>
								<Card.Text>
									<ul key={index}>
                                        <li>Chain_Name: {b.Chain_Name}</li>
                                        <li>Position: {b.Position}</li>
										<li>SIN: {b.SIN}</li>
                                        <li>Address: {b.Address}</li>
									</ul>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</div>
	);
}

export default Profile;
