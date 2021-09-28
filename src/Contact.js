import React from "react";

const Contact = ({
	_id,
	alias,
	email,
	prefix,
	first_name,
	last_name,
	phoneNumber,
}) => {
	return (
		<article style={{ borderStyle: "solid" }}>
			<div>
				<h1>{first_name + " " + last_name}</h1>
				<p>{prefix}</p>
				<p>{phoneNumber}</p>
				<p>{email}</p>
				<p>{alias}</p>
			</div>
		</article>
	);
};

export default Contact;
