import { useCards } from "../../cards/hooks/useCards";
import CardsPage from "../../cards/pages/CardsPage";

const MoviesPage = () => {
	const { cards, searchAPI, filterAPI, genres } = useCards("movies");

	return (
		<CardsPage
			cards={cards}
			pageName="movies"
			onSearch={searchAPI}
			genres={genres}
			onFilter={() => {
				filterAPI();
			}}
		/>
	);
};

export default MoviesPage;
