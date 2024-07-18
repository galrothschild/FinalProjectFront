import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import PaginatedLayout from "../../layout/special/PaginatedLayout";
import SearchBar from "../../layout/special/SearchBar";
import Filter from "../../layout/special/Filter";
import type { Genre } from "../../movies/models/IMovie.model";
import { useEffect } from "react";
import { setPage } from "../../redux/pages/pageSlice";
import MappedCards from "../components/MappedCards";

export type CardData = {
	id: number;
	description: string;
	genres: string;
	imgSrc: string;
	title: string;
	url: "movies" | "tv";
};

type CardsPageProps = {
	cards: CardData[];
	pageName: "movies" | "tv";
	onSearch: (search: string) => void;
	genres: {
		options: Genre[];
		selected: number[];
		setSelected: (IDs: number[]) => void;
	};
	onFilter: () => void;
};

const CardsPage: React.FC<CardsPageProps> = ({
	cards,
	pageName,
	onSearch,
	genres,
	onFilter,
}) => {
	const isLoading = useSelector((state: RootState) => state.cards.isLoading);
	const dispatch = useDispatch<AppDispatch>();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		dispatch(setPage(1));
	}, []);
	return (
		<PaginatedLayout>
			<div className="flex items-center justify-center gap-5 flex-col md:flex-row">
				<SearchBar onSearch={onSearch} pageName={pageName} />
				<Filter
					genres={genres.options}
					onFilter={onFilter}
					selectedOptions={genres.selected}
					setSelectedOptions={genres.setSelected}
				/>
			</div>
			{/* {!isLoading ? (
				<div className={CardsGallery}>
					{cards.map((card) => (
						<CardComponent
							id={card.id}
							key={card.id}
							description={card.description}
							genres={card.genres}
							imgSrc={card.imgSrc}
							title={card.title}
							url={pageName}
						/>
					))}
				</div>
			) : (
				<div className={CardsGallery}>
					{[...Array(10)].map((_) => (
						<CardPlaceHolder key={Math.random()} />
					))}
				</div>
			)} */}
			<MappedCards isLoading={isLoading} cards={cards} pageName={pageName} />
		</PaginatedLayout>
	);
};

export default CardsPage;
