import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFromApi, getFromAPIFiltered } from "../../api/api.service";
import { setCards, setLoading } from "../../redux/cards/cardsSlice";
import { setGenres, setMovies } from "../../redux/movies/moviesSlice";
import { setTotalPages } from "../../redux/pages/pageSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { normalizeMovies } from "../utils/normalizeMovies";
import { setSearch } from "../../redux/search/searchSlice";

export const useMovies = () => {
	const currentPage = useSelector((state: RootState) => state.page.page);
	const dispatch = useDispatch<AppDispatch>();
	const search = useSelector((state: RootState) => state.search.searchTerm);
	const cards = useSelector((state: RootState) => state.cards.cards);
	const IDs = useSelector((state: RootState) => state.movies.genres);
	const fetchMovies = async (page: number, search?: string) => {
		try {
			dispatch(setLoading(true));
			const { results: movies, total_pages } = await getFromApi(
				"/movies",
				page,
				search,
			);
			dispatch(setTotalPages(total_pages));
			dispatch(setMovies(movies));
			const cards = normalizeMovies(movies);
			dispatch(setCards(cards));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.error(error);
		}
	};
	const searchMovies = async (search: string) => {
		dispatch(setGenres([]));
		await fetchMovies(currentPage, search);
	};
	const filterMovies = async () => {
		try {
			dispatch(setLoading(true));
			dispatch(setSearch(""));
			const { results: movies, total_pages } = await getFromAPIFiltered(
				IDs,
				"movies",
			);
			dispatch(setTotalPages(total_pages));
			dispatch(setMovies(movies));
			const cards = normalizeMovies(movies);
			dispatch(setCards(cards));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.error(error);
		}
	};
	const availableGenres = [
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
	// biome-ignore lint/correctness/useExhaustiveDependencies: fetchMovies changes on each render.
	useEffect(() => {
		dispatch(setCards([]));
		document.title = `Movies page ${currentPage} | MyMovies`;
		fetchMovies(currentPage, search);
	}, [currentPage]);

	return {
		cards,
		searchMovies,
		filterMovies,
		genres: {
			options: availableGenres,
			selected: IDs,
			setSelected: (IDs: number[]) => dispatch(setGenres(IDs)),
		},
	};
};
