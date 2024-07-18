import { useEffect, useState } from "react";
import TabPage from "../../layout/special/TabPage";
import { getUsersWatchList } from "../utils/usersApi.service";
import type { ITVShow } from "../../tv/models/ITVShow.model";
import type { IMovie } from "../../movies/models/IMovie.model";
import { normalizeTVShows } from "../../tv/utils/normalizeShow";
import { normalizeMovies } from "../../movies/utils/normalizeMovies";
import MappedCards from "../../cards/components/MappedCards";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

type watchListType = {
	tv: ITVShow[];
	movies: IMovie[];
};

const WatchlistPage = () => {
	const [watchlist, setWatchlist] = useState<watchListType>();
	const [isLoading, setIsLoading] = useState(true);
	const watchlistState = useSelector(
		(state: RootState) => state.user.watchList,
	);
	const getWatchlist = async () => {
		setIsLoading(true);
		const response = (await getUsersWatchList()) as watchListType;
		setWatchlist(response);
		setIsLoading(false);
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getWatchlist();
	}, [watchlistState]);
	const watchlistContent = normalizeTVShows(
		watchlist?.tv.filter((show) => show.watched === false) || [],
	);
	watchlistContent.push(
		...normalizeMovies(
			watchlist?.movies.filter((movie) => movie.watched === false) || [],
		),
	);
	const watchedContent = [
		...normalizeTVShows(
			watchlist?.tv.filter((show) => show.watched === true) || [],
		),
		...normalizeMovies(
			watchlist?.movies.filter((movie) => movie.watched === true) || [],
		),
	];

	const tabs = [
		{
			title: "Watchlist",
			content: <MappedCards cards={watchlistContent} isLoading={isLoading} />,
		},
		{
			title: "Marked as Watched",
			content: <MappedCards cards={watchedContent} isLoading={isLoading} />,
		},
	];
	return <TabPage tabs={tabs} />;
};

export default WatchlistPage;
