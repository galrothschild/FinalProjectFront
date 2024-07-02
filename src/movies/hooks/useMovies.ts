import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFromApi } from "../../api/api.service";
import { setCards, setLoading } from "../../redux/cards/cardsSlice";
import { setMovies } from "../../redux/movies/moviesSlice";
import { setTotalPages } from "../../redux/pages/pageSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { normalizeMovies } from "../utils/normalizeMovies";
import { setSearch } from "../../redux/search/searchSlice";

export const useMovies = () => {
	const currentPage = useSelector((state: RootState) => state.page.page);
	const dispatch = useDispatch<AppDispatch>();
	const search = useSelector((state: RootState) => state.search.searchTerm);
	const cards = useSelector((state: RootState) => state.cards.cards);
	const fetchMovies = async (page: number, search?: string) => {
		try {
			dispatch(setLoading(true));
			dispatch(setSearch(""));
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
		await fetchMovies(currentPage, search);
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: fetchMovies changes on each render.
	useEffect(() => {
		dispatch(setCards([]));
		document.title = `Movies page ${currentPage} | MyMovies`;
		fetchMovies(currentPage, search);
	}, [currentPage]);

	return { cards, searchMovies };
};
