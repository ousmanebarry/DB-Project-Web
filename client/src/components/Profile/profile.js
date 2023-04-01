import "./profile.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";

function Profile() {
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		fetchProfile();
	}, []);

	const fetchProfile = () => {
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
			<Col md={6} lg={4} className="mb-4">
				<Card>
					<Card.Body>
						<Card.Title>
							<b>{`${profile.Full_Name}`}</b>
						</Card.Title>
						<Card.Text>
							<p>Chain Name: {profile.Chain_Name}</p>
							<p>Position: {profile.Position}</p>
							<p>SIN: {profile.SIN}</p>
							<p>Home Address: {profile.Address}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</div>
	);
}

export default Profile;
