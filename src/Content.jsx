import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Mobx from "./Mobx";
import ReactJS from "./ReactJS";
import Redux from "./Redux";
import TypeScript from "./TypeScript";

const Content = () => {
	return (
		<main>
			<Routes>
				<Route element={<MainPage />} path='/' />
				<Route element={<Mobx />} path='/mobx' />
				<Route element={<ReactJS />} path='/react' />
				<Route element={<Redux />} path='/redux' />
				<Route element={<TypeScript />} path='/typescript/:message' />
				<Route from='*' to='/' />
			</Routes>
		</main>
	);
};

export default Content;
