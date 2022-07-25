// @ts-nocheck

import { useEffect, useState } from "react";
import axios from "axios";
import * as Constants from "../../utilities/constants";
import Card from "./Card";
import EmptyList from "./EmptyList";
import "./Card.scss";
import { setCharacters } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CardList = () => {
	const dispatch = useDispatch();

	const characters = useSelector((state: RootState) => state.allCharacters);

	useEffect(() => {
		const fetchCharacters = async () => {
			const response = await axios.post(Constants.ENDPOINT, {
				query: Constants.QUERY,
				headers: { "Content-Type": "application/json" },
			});
			dispatch(setCharacters(response.data.data.characters.results));
		};

		fetchCharacters().catch((error) => console.error(error));
	}, []);

	return (
		<>
			{characters.results === undefined || characters.results.length === 0 ? (
				<EmptyList />
			) : (
				<Card />
			)}
		</>
	);
};

export default CardList;
