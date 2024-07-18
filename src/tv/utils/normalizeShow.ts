import type { CardData } from "../../cards/pages/CardsPage";
import type { ITVShow } from "../models/ITVShow.model";

export const normalizeTVShows = (tvShows: ITVShow[]): CardData[] => {
	return tvShows.map((tvShow) => ({
		id: tvShow.id,
		description: tvShow.overview,
		genres: tvShow.genres.map((genre) => genre.name).join(", "),
		imgSrc: tvShow.poster_path,
		title: tvShow.name,
		url: "tv",
	}));
};
