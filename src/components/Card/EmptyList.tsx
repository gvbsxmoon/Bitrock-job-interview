import AngryRickMorty from "../../assets/angry.png";
import "./Card.scss"

const EmptyList = () => {
	return (
		<div className="empty-list">
			<img className="empty-list_image" src={AngryRickMorty} alt="" />
			<p className="empty-list_desc">There are no such characters with this name, please try again!</p>
		</div>
	);
}

export default EmptyList;
