import { getFromAPIFiltered } from "../../api/api.service";
import CardsPage from "../../cards/pages/CardsPage";
import { useMovies } from "../hooks/useMovies";

const MoviesPage = () => {
	const { cards, searchMovies, filterMovies, genres } = useMovies();

	return (
		<CardsPage
			cards={cards}
			pageName="movies"
			onSearch={searchMovies}
			genres={genres}
			onFilter={() => {
				filterMovies();
			}}
		/>
	);
};

export default MoviesPage;
