import React from "react";
import { useParams } from "react-router-dom";

const TypeScript = () => {
	const { message } = useParams();

	return (
		<div>
			<h2>TypeScript</h2>
			<p>{message}</p>
		</div>
	);
};

export default TypeScript;
