import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mobx = () => {
	const [inputData, setInputdata] = useState("");
	const navigator = useNavigate();

	const handleOnChange = (event) => setInputdata(event.target.value);
	const handleOnClick = () => {
		const location = {
			pathname: `/typescript/${inputData}`,
		};
		navigator(location);
	};
	return (
		<div>
			<h2>MobX</h2>
			<input type='text' onChange={handleOnChange} value={inputData} />
			<button onClick={handleOnClick}>Send params to TypeScript</button>
		</div>
	);
};

export default Mobx;
