// @ts-nocheck

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BsChevronDown } from "react-icons/bs";
import "./Modal.scss";
const Modal = () => {
	const selected = useSelector(
		(state: RootState) => state.selectedCharacter.results
	);

	return (
		<div className="modal">
			<img
				className="modal_char-image"
				src={selected.image}
				alt={selected.name}
			/>
			<p className="modal_char-name">{selected.name}</p>

			<div className="modal_char-details">
				<p>{`Species: ${selected.species}`}</p>
				<p>{`Gender: ${selected.gender} `}</p>
				<p>{`Status: ${selected.status}`}</p>
			</div>

			<input type="checkbox" id="episodes" />
			<label htmlFor="episodes" className="modal_show-episode">
				Show episodes where {selected.name} appears
				<BsChevronDown fontWeight={600} className="chevron" />
			</label>

			<ul className="modal_episode-list">
				{selected.episode.map((episode) => (
					<li key={episode.id} className="modal_episode-detail">
						<p>
							{episode.name} - <strong>{episode.episode}</strong>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Modal;
