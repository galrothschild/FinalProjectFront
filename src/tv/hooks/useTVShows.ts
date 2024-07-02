import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFromApi } from "../../api/api.service";
import { setCards, setLoading } from "../../redux/cards/cardsSlice";
import { setTotalPages } from "../../redux/pages/pageSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { setShows } from "../../redux/tvshows/showSlice";
import { normalizeTVShows } from "../utils/normalizeShow";
import { setSearch } from "../../redux/search/searchSlice";

export const useTVShows = () => {
	const currentPage = useSelector((state: RootState) => state.page.page);
	const dispatch = useDispatch<AppDispatch>();
	const search = useSelector((state: RootState) => state.search.searchTerm);
	const cards = useSelector((state: RootState) => state.cards.cards);
	const fetchShows = async (page: number, search?: string) => {
		try {
			dispatch(setLoading(true));
			dispatch(setSearch(""));
			const { results: shows, total_pages } = await getFromApi(
				"/tv",
				page,
				search,
			);
			dispatch(setTotalPages(total_pages));
			dispatch(setShows(shows));
			const cards = normalizeTVShows(shows);
			dispatch(setCards(cards));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.error(error);
		}
	};
	const searchShows = async (search: string) => {
		await fetchShows(currentPage, search);
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: fetchMovies changes on each render.
	useEffect(() => {
		dispatch(setCards([]));
		document.title = `TV Shows page ${currentPage} | MyMovies`;
		fetchShows(currentPage, search);
	}, [currentPage]);

	return { cards, searchShows };
};
