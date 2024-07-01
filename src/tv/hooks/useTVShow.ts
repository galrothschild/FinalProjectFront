import { useState, useEffect } from "react";
import { getFromApi } from "../../api/api.service";
import type { ITVShow } from "../models/ITVShow.model";

export const useTVShow = (id: number) => {
	const [show, setShow] = useState<ITVShow>();
	const [loading, setLoading] = useState(true);
	const fetchMovie = async (id: number) => {
		const response = await getFromApi(`/tv/${id}`);
		setShow(response);
		setLoading(false);
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchMovie(id);
	}, [id]);
	return { show, loading };
};
