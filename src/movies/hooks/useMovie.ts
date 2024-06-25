import { useEffect, useState } from "react";
import { getFromApi } from "../../api/api.service";
import type { IMovie } from "../models/IMovie.model";

export const useMovie = (id: number) => {
	const [movie, setMovie] = useState<IMovie>();
	const [loading, setLoading] = useState(true);
	// biome-ignore lint/correctness/useExhaustiveDependencies: needs to run once.
	useEffect(() => {
		const fetchMovie = async () => {
			const response = await getFromApi(`/movies/${id}`);
			setMovie(response);
			setLoading(false);
		};
		fetchMovie();
	}, [id]);
	return { movie, loading };
};
