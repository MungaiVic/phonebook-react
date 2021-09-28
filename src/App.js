import "./App.css";
import "./ContactCard";
import ContactCard from "./ContactCard";
import { useState, useEffect } from "react";

const url = "http://localhost:5001/contacts";
const entryUrl = "http://localhost:5001/";

function App() {
	const [contact, setContact] = useState([]);
	const [message, setMessage] = useState("Contact List");

	const welcome = async () => {
		try {
			fetch(url)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				.then((data) => {
					console.log(data);
					setContact(data);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		welcome();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Contact: {contact.length}</h1>
				<ContactCard contact={contact} />
			</header>
		</div>
	);
}

export default App;
