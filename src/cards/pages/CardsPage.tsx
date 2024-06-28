import { useSelector } from "react-redux";
import CardComponent from "../components/Card";
import CardPlaceHolder from "../components/CardPlaceHolder";
import type { RootState } from "../../redux/store";

const CardsGallery = "flex gap-3 flex-wrap justify-center md:basis-1/2";

export type CardData = {
	id: number;
	description: string;
	genres: string;
	imgSrc: string;
	title: string;
};

type CardsPageProps = {
	cards: CardData[];
};

const CardsPage: React.FC<CardsPageProps> = ({ cards }) => {
	const isLoading = useSelector((state: RootState) => state.cards.isLoading);
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

export default CardsPage;
