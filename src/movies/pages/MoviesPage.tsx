import { useSelector } from "react-redux";
import { useCards } from "../../cards/hooks/useCards";
import CardsPage from "../../cards/pages/CardsPage";
import type { RootState } from "../../redux/store";

const MoviesPage = () => {
	const { cards, searchAPI, filterAPI, genres } = useCards("movies");
	const currentPage = useSelector((state: RootState) => state.page.page);
	return (
		<CardsPage
			cards={cards}
			pageName="movies"
			onSearch={searchAPI}
			genres={genres}
			onFilter={() => {
				filterAPI(currentPage);
			}}
		/>
	);
};

export default MoviesPage;
