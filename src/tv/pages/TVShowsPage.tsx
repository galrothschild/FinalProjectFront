import { useTVShows } from "../hooks/useTVShows";
import CardsPage from "../../cards/pages/CardsPage";
import type { Genre } from "../../movies/models/IMovie.model";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { setSearch } from "../../redux/search/searchSlice";
import { setPage } from "../../redux/pages/pageSlice";
import { useCards } from "../../cards/hooks/useCards";

const TVShowsPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const { cards, filterAPI, genres, searchAPI } = useCards("tv");

	return (
		<CardsPage
			cards={cards}
			pageName="tv"
			onSearch={searchAPI}
			genres={genres}
			onFilter={filterAPI}
		/>
	);
};

export default TVShowsPage;
