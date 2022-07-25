// @ts-nocheck

import axios from "axios";
import { useEffect } from "react";
import * as Constants from "../../utilities/constants";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Pagination.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { apiInfos, setCharacters } from "../../redux/actions/actions";

const Pagination = () => {
	const pagination = useSelector((state: RootState) => state.paginationInfo.results);
	const dispatch = useDispatch();

  const fetchInfo = async () => {
    const response = await axios.post(Constants.ENDPOINT, {
      query: Constants.INFO_QUERY,
      headers: { "Content-Type": "application/json" },
    });

    dispatch(apiInfos(response.data.data.characters.info));
  };

	const changePage = async (page: number) => {    
		const response = await axios.post(Constants.ENDPOINT, {
			query: Constants.PAGE_QUERY,
			variables: { page: page },
			headers: { "Content-Type": "application/json" },
		});

		dispatch(setCharacters(response.data.data.characters.results));
    dispatch(apiInfos(response.data.data.characters.info));
	};

	useEffect(() => {
		fetchInfo().catch((error) => console.error(error));
	}, []);

	return (
		<div className="pagination">
			<button
				className="pagination_left pagination-button"
				onClick={() => changePage(pagination.prev)}
				disabled={pagination.prev === null}
			>
				<span>prev</span> <BsChevronLeft />{" "}
			</button>
			<button
				className="pagination_right pagination-button"
				onClick={() => changePage(pagination.next)}
				disabled={pagination.next === null}
			>
				<BsChevronRight />
				<span>next</span>
			</button>
			<span className="pagination_interrupt">·</span>
		</div>
	);
};

export default Pagination;
