import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
	const [isLoggedIn, setIsLoggedIn] = useState({
		logged: false,
		id: " ",
	});
	const history = useNavigate();

	useEffect(() => {
        localStorage.clear()
		const checkLoggedIn = () => {
            console.log('Home enter');
			// If user hass logged in so
			if (Cookies.get("isLoggedIn") != undefined) {
				console.log(JSON.stringify(Cookies.get("isLoggedIn")));

				const loggedInCookie = Cookies.get("isLoggedIn");

				console.log(JSON.parse(loggedInCookie).bool);
				if (JSON.parse(loggedInCookie).bool == true) {
					console.log(loggedInCookie);
					history("/chat");
				}

				// If user hass not logged in so direct to login page
				else {
					// Navigate to another login page after 5 seconds
				}
			} else {
				console.log("cOOKIE NOT DEFINED");
				history("/login");
			}
		};

		checkLoggedIn();
	}, [history]);

	const handleLogin = () => {
		history("/login");
	};
};

export default Home;
