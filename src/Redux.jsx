import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redux = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleOnClick = () => navigate(-1);

	const isActive = location.state ? "Yes" : "No";
	return (
		<div>
			<h2>Redux</h2>
			<p>Information form Ract isActive was sent: {isActive}</p>
			<button onClick={handleOnClick}>Go Back</button>
		</div>
	);
};

export default Redux;
