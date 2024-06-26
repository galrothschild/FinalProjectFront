import { useEffect, useState } from "react";
import { getFromApi } from "../../api/api.service";
import type { IMovie } from "../models/IMovie.model";

export const useMovie = (id: number) => {
	const [movie, setMovie] = useState<IMovie>();
	const [loading, setLoading] = useState(true);
	const fetchMovie = async (id: number) => {
		const response = await getFromApi(`/movies/${id}`);
		setMovie(response);
		setLoading(false);
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchMovie(id);
	}, [id]);
	return { movie, loading };
};
