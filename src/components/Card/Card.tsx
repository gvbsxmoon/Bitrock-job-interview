// @ts-nocheck

import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedCharacter } from "../../redux/actions/actions";
import { RootState } from "../../redux/store";
import "./Card.scss";

const Card = () => {
	const characters = useSelector((state: RootState) => state.allCharacters.results);

	return (
		<div className="cards-list">
			{characters.map((character) => (
				<div className="card" key={character.id}>
					<img
						src={character.image}
						alt={character.name}
						className="card_image"
					/>
					<div className="card_infos">
						<span className="card_title">{character.name}</span>
						<div className="card--button">
							<Link
								to={`/character/${character.id}`}
								className="card--button_more"
								onClick={() => dispatch(selectedCharacter(character))}
							>
								discover
							</Link>
							<button className="card--button_favorite">
								<AiOutlineStar size={20} />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Card;
