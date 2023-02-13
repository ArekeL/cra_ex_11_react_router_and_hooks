import React from "react";

import { useNavigate } from "react-router-dom";

const ReactJS = () => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		const location = {
			pathname: "/redux",
		};

		navigate(location);
	};
	return (
		<div>
			<h2>React</h2>
			<button onClick={handleOnClick}>Go to Redux</button>
		</div>
	);
};

export default ReactJS;
