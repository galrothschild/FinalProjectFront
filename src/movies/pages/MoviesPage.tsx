import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardsPage from "../../cards/pages/CardsPage";
import { setPage } from "../../redux/pages/pageSlice";
import { setSearch } from "../../redux/search/searchSlice";
import type { AppDispatch } from "../../redux/store";
import { useMovies } from "../hooks/useMovies";

const MoviesPage = () => {
	const { cards, searchMovies } = useMovies();
	const genres = [
		{
			id: 28,
			name: "Action",
		},
		{
			id: 12,
			name: "Adventure",
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
			id: 14,
			name: "Fantasy",
		},
		{
			id: 36,
			name: "History",
		},
		{
			id: 27,
			name: "Horror",
		},
		{
			id: 10402,
			name: "Music",
		},
		{
			id: 9648,
			name: "Mystery",
		},
		{
			id: 10749,
			name: "Romance",
		},
		{
			id: 878,
			name: "Science Fiction",
		},
		{
			id: 10770,
			name: "TV Movie",
		},
		{
			id: 53,
			name: "Thriller",
		},
		{
			id: 10752,
			name: "War",
		},
		{
			id: 37,
			name: "Western",
		},
	];
	return (
		<CardsPage
			cards={cards}
			pageName="movies"
			onSearch={searchMovies}
			genres={genres}
			onFilter={(IDs: number[]) => {
				console.log(IDs);
			}}
		/>
	);
};

export default MoviesPage;
