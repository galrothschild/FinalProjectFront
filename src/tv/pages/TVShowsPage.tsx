import { useTVShows } from "../hooks/useTVShows";
import CardsPage from "../../cards/pages/CardsPage";

const TVShowsPage = () => {
	const { cards, searchShows } = useTVShows();
	return <CardsPage cards={cards} pageName="tv" onSearch={searchShows} />;
};

export default TVShowsPage;
