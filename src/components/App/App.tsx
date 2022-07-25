import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardList from "../Card/CardList";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";
import Title from "../Title/Title";
import Pagination from "../Page/Pagination";

function App() {
	return (
		<>
			<Router>
				<Title />
				<Search />
				<Routes>
					<Route path="/" element={<CardList />}></Route>
					<Route path="/character/:id" element={<Modal />}></Route>
				</Routes>
				<Pagination />
			</Router>
		</>
	);
}

export default App;
