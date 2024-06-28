import { useDispatch, useSelector } from "react-redux";
import CardsPage from "../../cards/pages/CardsPage";
import PaginatedLayout from "../../layout/special/PaginatedLayout";
import type { AppDispatch, RootState } from "../../redux/store";
import { setMovies } from "../../redux/movies/moviesSlice";
import { getFromApi } from "../../api/api.service";
import { useEffect } from "react";
import { normalizeMovies } from "../utils/normalizeMovies";
import { setCards, setLoading } from "../../redux/cards/cardsSlice";

const MoviesPage = () => {
	const currentPage = useSelector((state: RootState) => state.page.page);
	const dispatch = useDispatch<AppDispatch>();
	const cards = useSelector((state: RootState) => state.cards.cards);
	const movies = useSelector((state: RootState) => state.movies.movies);
	const fetchMovies = async (page: number) => {
		try {
			dispatch(setLoading(true));
			const movies = await getFromApi("/movies", page);
			dispatch(setMovies(movies));
			const cards = normalizeMovies(movies);
			dispatch(setCards(cards));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.error(error);
		}
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: fetchMovies changes on each render.
	useEffect(() => {
		dispatch(setCards([]));
		document.title = `Cards page ${currentPage} | MyMovies`;
		fetchMovies(currentPage);
	}, [currentPage]);
	return (
		<PaginatedLayout>
			<CardsPage cards={cards} />
		</PaginatedLayout>
	);
};

export default MoviesPage;
