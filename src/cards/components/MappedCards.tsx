import type { CardData } from "../pages/CardsPage";
import CardComponent from "./Card";
import CardPlaceHolder from "./CardPlaceHolder";
import style from "./styles/MappedCards.module.css";

const { CardsGallery } = style;

type MappedCardsProps = {
	isLoading: boolean;
	cards: CardData[];
	pageName?: "movies" | "tv";
};

const MappedCards: React.FC<MappedCardsProps> = ({
	isLoading,
	cards,
	pageName,
}) => {
	return !isLoading ? (
		<div className={CardsGallery}>
			{cards.map((card) => (
				<CardComponent
					id={card.id}
					key={card.id}
					description={card.description}
					genres={card.genres}
					imgSrc={card.imgSrc}
					title={card.title}
					url={pageName || card.url}
				/>
			))}
		</div>
	) : (
		<div className={CardsGallery}>
			{[...Array(10)].map((_) => (
				<CardPlaceHolder key={Math.random()} />
			))}
		</div>
	);
};

export default MappedCards;
