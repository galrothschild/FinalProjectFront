import { useEffect } from "react";
import CardComponent from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { setLoading, setMovies } from "../../redux/movies/moviesSlice";
import { getFromApi } from "../../api/api.service";
import { Pagination, Spinner } from "flowbite-react";
import { usePages } from "../../components/pagination/usePages";
import PaginationComponent from "../../components/pagination/PaginationComponent";

const CardsPage = () => {
	const { currentPage } = usePages();
	const dispatch = useDispatch<AppDispatch>();
	const movies = useSelector((state: RootState) => state.movies.movies);
	const isLoading = useSelector((state: RootState) => state.movies.isLoading);
	const fetchMovies = async () => {
		try {
			dispatch(setLoading(true));
			const movies = await getFromApi("/movies", currentPage);
			dispatch(setMovies(movies));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setLoading(false));
			console.error(error);
		}
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: needs to be run once
	useEffect(() => {
		document.title = `Cards page ${currentPage} | MyMovies`;
		fetchMovies();
	}, [currentPage]);
	return !isLoading ? (
		<div className="flex gap-3 flex-wrap justify-center">
			{movies.map((movie) => (
				<CardComponent
					key={movie.id}
					description={movie.overview}
					genres={
						movie.genres
							? movie.genres.map((genre) => genre.name).join(", ")
							: ""
					}
					imgSrc={movie.poster_path}
					title={movie.title}
				/>
			))}
		</div>
	) : (
		<Spinner />
	);
};

export default CardsPage;
