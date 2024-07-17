import { useEffect, useState } from "react";
import TabPage from "../../layout/special/TabPage";
import { getUsersWatchList } from "../utils/usersApi.service";
import { set } from "react-hook-form";
import type { ITVShow } from "../../tv/models/ITVShow.model";
import type { IMovie } from "../../movies/models/IMovie.model";
import { normalizeTVShows } from "../../tv/utils/normalizeShow";
import { normalizeMovies } from "../../movies/utils/normalizeMovies";
import CardsPage from "../../cards/pages/CardsPage";

type watchListType = {
	tv: ITVShow[];
	movies: IMovie[];
};

const WatchlistPage = () => {
	const [watchlist, setWatchlist] = useState<watchListType>();
	const getWatchlist = async () => {
		const response = (await getUsersWatchList()) as watchListType;
		setWatchlist(response);
	};
	useEffect(() => {
		getWatchlist();
	}, [getWatchlist]);
	const watchlistContent = normalizeTVShows(
		watchlist?.tv.filter((show) => show.watched === false) || [],
	);
	watchlistContent.push(
		...normalizeMovies(
			watchlist?.movies.filter((movie) => movie.watched === false) || [],
		),
	);
    const watchedContent = [...normalizeTVShows(watchlist?.tv.filter((show) => show.watched === true) || []), ...normalizeMovies(watchlist?.movies.filter((movie) => movie.watched === true) || [])];

	const tabs = [
		{ title: "Watchlist", content: <CardsPage cards={watchlistContent} genres={} /> ,
		{ title: "Marked as Watched", content: <div>Watched</div> },
	];
	return <TabPage tabs={tabs} />;
};

export default WatchlistPage;
