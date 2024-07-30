import { useState, useEffect } from "react";
import { getFromApi } from "../../api/api.service";
import type { ITVShow } from "../models/ITVShow.model";
import type { ICastMember } from "../../utils/common.model";

export const useTVShow = (id: number) => {
	const [show, setShow] = useState<ITVShow>();
	const [loading, setLoading] = useState(true);
	const [cast, setCast] = useState<ICastMember[]>([]);
	const fetchMovie = async (id: number) => {
		const response = await getFromApi(`/tv/${id}`);
		setShow(response);
		const castResponse = await getFromApi(`/tv/${id}/credits`);
		setCast(castResponse);
		setLoading(false);
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchMovie(id);
	}, [id]);
	return { show, loading, cast };
};
