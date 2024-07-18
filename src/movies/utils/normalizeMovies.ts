import type { CardData } from "../../cards/pages/CardsPage";
import type { IMovie } from "../models/IMovie.model";

export const normalizeMovies = (movies: IMovie[]): CardData[] => {
	return movies.map((movie) => ({
		id: movie.id,
		description: movie.overview,
		genres: movie.genres.map((genre) => genre.name).join(", "),
		imgSrc: movie.poster_path,
		title: movie.title,
		url: "movies",
	}));
};
