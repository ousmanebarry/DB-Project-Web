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
import { UserContext } from "./Contexts/UserContext";
import SignIn from "./components/signIn/signin";
import HomePage from "./components/Home/home";
import BookPage from "./components/Book/book";
import Branches from "./components/HotelBranches/hotelBranches";
import Bookings from "./components/Bookings/bookings";

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
					
				<Route exact path="/employee/bookings">
						<Navbar List={[{ display: "Booking", path: "/employee/booking" },{ display: "Renting", path: "/employee/renting" }, { display: "Profile", path: "/employee/profile" }]} />
						<Bookings />
						<Footer />
					</Route>
					
					<Route exact path="/employee/rentings">
						<Navbar List={[{ display: "Booking", path: "/employee/booking" },{ display: "Renting", path: "/employee/renting" }, { display: "Profile", path: "/employee/profile" }]} />
						
						<Footer />
					</Route>

					<Route exact path="/employee/profile">
						<Navbar List={[{ display: "Booking", path: "/employee/booking" },{ display: "Renting", path: "/employee/renting" }, { display: "Profile", path: "/employee/profile" }]} />
						
						<Footer />
					</Route>

					<Route exact path="/">
						<Navbar List={[{ display: "Employee Login", path: "/login" }]} />
						<HomePage />
						<Footer />
					</Route>

					<Route exact path="/login">
						<Navbar List={[{ display: "Home Page", path: "/" }]} />
						<SignIn />
						<Footer />
					</Route>

					<Route exact path="/book">
						<Navbar List={[{ display: "Home Page", path: "/" }]} />
						<BookPage />
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
