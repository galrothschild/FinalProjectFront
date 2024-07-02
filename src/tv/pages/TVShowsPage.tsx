import { useTVShows } from "../hooks/useTVShows";
import CardsPage from "../../cards/pages/CardsPage";
import type { Genre } from "../../movies/models/IMovie.model";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { setSearch } from "../../redux/search/searchSlice";
import { setPage } from "../../redux/pages/pageSlice";

const TVShowsPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const { cards, searchShows } = useTVShows();
	const genres: Genre[] = [
		{
			id: 10759,
			name: "Action & Adventure",
		},
		{
			id: 16,
			name: "Animation",
		},
		{
			id: 35,
			name: "Comedy",
		},
		{
			id: 80,
			name: "Crime",
		},
		{
			id: 99,
			name: "Documentary",
		},
		{
			id: 18,
			name: "Drama",
		},
		{
			id: 10751,
			name: "Family",
		},
		{
			id: 10762,
			name: "Kids",
		},
		{
			id: 9648,
			name: "Mystery",
		},
		{
			id: 10763,
			name: "News",
		},
		{
			id: 10764,
			name: "Reality",
		},
		{
			id: 10765,
			name: "Sci-Fi & Fantasy",
		},
		{
			id: 10766,
			name: "Soap",
		},
		{
			id: 10767,
			name: "Talk",
		},
		{
			id: 10768,
			name: "War & Politics",
		},
		{
			id: 37,
			name: "Western",
		},
	];

	return (
		<CardsPage
			cards={cards}
			pageName="tv"
			onSearch={searchShows}
			genres={genres}
			onFilter={() => {}}
		/>
	);
};

export default TVShowsPage;
