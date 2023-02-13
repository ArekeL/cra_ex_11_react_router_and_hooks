import React from "react";
import { useNavigate } from "react-router-dom";

const Redux = () => {
	const navigate = useNavigate();

	const handleOnClick = () => navigate(-1);
	return (
		<div>
			<h2>Redux</h2>
			<button onClick={handleOnClick}>Go Back</button>
		</div>
	);
};

export default Redux;
