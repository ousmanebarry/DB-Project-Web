import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Rent from "./components/Rent/rent";
import HomePage from "./components/Home/home";
import BookPage from "./components/Book/book";
import Profile from "./components/Profile/profile";
import Bookings from "./components/Bookings/bookings";
import Rentings from "./components/Rentings/rentings";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/employee/bookings">
					<Navbar
						List={[
							{ display: "Booking", path: "/employee/bookings" },
							{ display: "Renting", path: "/employee/rentings" },
							{ display: "Profile", path: "/employee/profile" },
						]}
					/>
					<Bookings />
					<Footer />
				</Route>

				<Route exact path="/employee/rentings">
					<Navbar
						List={[
							{ display: "Booking", path: "/employee/bookings" },
							{ display: "Renting", path: "/employee/rentings" },
							{ display: "Profile", path: "/employee/profile" },
							{ display: "Renting Now", path: "/employee/rentnow" },
						]}
					/>
					<Rentings />
					<Footer />
				</Route>
				<Route exact path="/employee/rentnow">
					<Navbar
						List={[
							{ display: "Booking", path: "/employee/bookings" },
							{ display: "Renting", path: "/employee/rentings" },
							{ display: "Renting Now", path: "/employee/rentings/rentnow" },
							{ display: "Profile", path: "/employee/profile" },
						]}
					/>
					<Rent />
					<Footer />
				</Route>
				<Route exact path="/employee/profile">
					<Navbar
						List={[
							{ display: "Booking", path: "/employee/bookings" },
							{ display: "Renting", path: "/employee/rentings" },
							{ display: "Profile", path: "/employee/profile" },
						]}
					/>
					<Profile />
					<Footer />
				</Route>

				<Route exact path="/">
					<Navbar
						List={[{ display: "Employee Login", path: "/employee/bookings" }]}
					/>
					<HomePage />
					<Footer />
				</Route>

				<Route exact path="/book">
					<Navbar List={[{ display: "Home Page", path: "/" }]} />
					<BookPage />
					<Footer />
				</Route>

				<Route exact path="/*">
					<Redirect to={"/"} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
