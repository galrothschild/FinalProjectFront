import CardsPage from "../../cards/pages/CardsPage";
import { useMovies } from "../hooks/useMovies";

const MoviesPage = () => {
	const { cards, searchMovies } = useMovies();
	return <CardsPage cards={cards} pageName="movies" onSearch={searchMovies} />;
};

export default MoviesPage;
