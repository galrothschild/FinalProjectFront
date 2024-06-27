import { useEffect } from "react";
import CardComponent from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { setLoading, setMovies } from "../../redux/movies/moviesSlice";
import { getFromApi } from "../../api/api.service";
import { usePages } from "../../components/pagination/usePages";
import CardPlaceHolder from "../components/CardPlaceHolder";

const CardsGallery = "flex gap-3 flex-wrap justify-center md:basis-1/2";

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
		<div className={CardsGallery}>
			{movies.map((movie) => (
				<CardComponent
					id={movie.id}
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
		<div className={CardsGallery}>
			{[...Array(10)].map((_) => (
				<CardPlaceHolder key={Math.random()} />
			))}
		</div>
	);
};

export default CardsPage;
