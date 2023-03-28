import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { useState } from "react";
import Booking from "./components/CustomerView/Booking.js";
import { UserContext } from "./Contexts/UserContext";
import SignIn from "./components/signIn/signin";
import HomePage from "./components/Home/home";
import Branches from "./components/HotelBranches/hotelBranches";

function App() {
	const [user, setUser] = useState({
		id: 1,
		firstName: "",
		lastName: "",
		position: "",
		authenticated: false,
	});

	return (
		<Router>
			<UserContext.Provider value={{ user, setUser }}>
				<Switch>
					<Route exact path="/">
						<Navbar
							List={[
								{ display: "Sign In", path: "/login" },
								{ display: "Branches", path: "/branches" },
							]}
						/>
						<HomePage />
						<Footer />
					</Route>

					<Route exact path="/login">
						<Navbar List={[{ display: "Home Page", path: "/Database" }]} />
						<SignIn />
						<Footer />
					</Route>

					<Route exact path="/booking">
						<Navbar
							List={[
								{ display: "Home Page", path: "/" },
								{ display: "Branches", path: "/branches" },
							]}
						/>
						<Booking />
						<Footer />
					</Route>

					<Route exact path="/branches">
						<Navbar
							List={[
								{ display: "Home Page", path: "/" },
								{ display: "Booking", path: "/booking" },
							]}
						/>
						<Branches />
						<Footer />
					</Route>

					<Route exact path="/*">
						<Redirect to={"/"} />
					</Route>
				</Switch>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
