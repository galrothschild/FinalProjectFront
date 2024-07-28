import { useEffect, useState } from "react";
import { getFromApi } from "../../api/api.service";
import type { IMovie } from "../models/IMovie.model";
import type { ICastMember } from "../../utils/common.model";

export const useMovie = (id: number) => {
	const [movie, setMovie] = useState<IMovie>();
	const [loading, setLoading] = useState(true);
	const [cast, setCast] = useState<ICastMember[]>([]);
	const fetchMovie = async (id: number) => {
		const response = await getFromApi(`/movies/${id}`);
		setMovie(response);
		const castResponse = await getFromApi(`/movies/${id}/credits`);
		setCast(castResponse.cast);
		setLoading(false);
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchMovie(id);
	}, [id]);
	return { movie, loading, cast };
};
