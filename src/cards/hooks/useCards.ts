import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAvailableGenres,
	getFromAPIFiltered,
	getFromApi,
} from "../../api/api.service";
import { normalizeMovies } from "../../movies/utils/normalizeMovies";
import { setCards, setLoading } from "../../redux/cards/cardsSlice";
import {
	setAvailableMovieGenres,
	setMovieGenres,
	setMovies,
} from "../../redux/movies/moviesSlice";
import { setTotalPages } from "../../redux/pages/pageSlice";
import { setSearch } from "../../redux/search/searchSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import {
	setAvailableShowGenres,
	setShowGenres,
	setShows,
} from "../../redux/tv/tvSlice";
import { normalizeTVShows } from "../../tv/utils/normalizeShow";

export const useCards = (cardsType: "movies" | "tv") => {
	const currentPage = useSelector((state: RootState) => state.page.page);
	const dispatch = useDispatch<AppDispatch>();
	const search = useSelector((state: RootState) => state.search.searchTerm);
	const cards = useSelector((state: RootState) => state.cards.cards);
	const IDs = useSelector((state: RootState) => state[cardsType].genres);
	const availableGenres = useSelector(
		(state: RootState) => state[cardsType].availableGenres,
	);
	const setState = cardsType === "movies" ? setMovies : setShows;
	const normalize = cardsType === "movies" ? normalizeMovies : normalizeTVShows;
	const setGenres =
		cardsType === "movies"
			? (IDs: number[]) => dispatch(setMovieGenres(IDs))
			: (IDs: number[]) => dispatch(setShowGenres(IDs));
	const setAvailableGenres =
		cardsType === "movies" ? setAvailableMovieGenres : setAvailableShowGenres;
	const fetchAPI = async (page: number, search?: string) => {
		try {
			dispatch(setLoading(true));
			dispatch(setGenres([]));
			const { results: movies, total_pages } = await getFromApi(
				`/${cardsType}/`,
				page,
				search,
			);
			dispatch(setTotalPages(total_pages));
			dispatch(setState(movies));
			const cards = normalize(movies);
			dispatch(setCards(cards));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.error(error);
		}
	};
	const searchAPI = async (search: string) => {
		dispatch(setMovieGenres([]));
		await fetchAPI(currentPage, search);
	};
	const filterAPI = async (currentPage: number) => {
		try {
			dispatch(setLoading(true));
			dispatch(setSearch(""));
			const { results, total_pages } = await getFromAPIFiltered(
				IDs,
				cardsType,
				currentPage,
			);
			dispatch(setTotalPages(total_pages));
			dispatch(setState(results));
			const cards = normalize(results);
			dispatch(setCards(cards));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.error(error);
		}
	};
	const getGenres = () => {
		if (!availableGenres.length) {
			getAvailableGenres(cardsType).then((genres) => {
				dispatch(setAvailableGenres(genres));
			});
		}
		return availableGenres;
	};
	getGenres();
	// biome-ignore lint/correctness/useExhaustiveDependencies: fetchMovies changes on each render.
	useEffect(() => {
		dispatch(setCards([]));
		document.title = `${cardsType} page ${currentPage} | MyMovies`;
		if (IDs.length) {
			filterAPI(currentPage);
			return;
		}
		fetchAPI(currentPage, search);
	}, [currentPage]);

	return {
		cards,
		searchAPI,
		filterAPI,
		genres: {
			options: availableGenres,
			selected: IDs,
			setSelected: setGenres,
		},
	};
};
