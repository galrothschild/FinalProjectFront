import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import PaginatedLayout from "../../layout/special/PaginatedLayout";
import SearchBar from "../../layout/special/SearchBar";
import Filter from "../../layout/special/Filter";
import type { Genre } from "../../movies/models/IMovie.model";
import { useEffect } from "react";
import { setPage } from "../../redux/pages/pageSlice";
import MappedCards from "../components/MappedCards";
import { Button } from "flowbite-react";
import { toggleView } from "../../redux/cards/cardsSlice";

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
				<Button
					onClick={() => dispatch(toggleView())}
					className="hidden lg:block"
				>
					Toggle View
				</Button>
			</div>
			<MappedCards isLoading={isLoading} cards={cards} pageName={pageName} />
		</PaginatedLayout>
	);
};

export default CardsPage;
