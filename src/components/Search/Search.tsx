import { BsSearch } from "react-icons/bs";
import axios from "axios";
import * as Constants from "../../utilities/constants";
import { useState } from "react";
import { setCharacters, apiInfos } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import "./Search.scss";

const Search = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const dispatch = useDispatch();

	const fetchFilteredCharacter = async (name: String) => {
		const response = await axios.post(Constants.ENDPOINT, {
			query: Constants.SEARCH_QUERY,
			variables: { name: name },
			headers: { "Content-Type": "application/json" },
		});

		dispatch(setCharacters(response.data.data.characters.results));
		dispatch(apiInfos(response.data.data.characters.info));
	};

	const handleEnter = (event: any): void => {
		if (event.key === "Enter") {
			fetchFilteredCharacter(searchValue);
		}
	};

	return (
		<div className="search">
			<input
				type="text"
				id="search"
				className="search_input"
				value={searchValue}
				autoComplete="off"
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyDown={handleEnter}
        		onFocus={() => setSearchValue("")}
				required
			/>
			<label htmlFor="search" className="search_label">
				Character name
			</label>
			<button
				className="search_action"
				onClick={() => fetchFilteredCharacter(searchValue)}
			>
				<BsSearch size={15} />
			</button>
		</div>
	);
};

export default Search;
