import axios from "axios";

const instance = axios.create();
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1234";
instance.interceptors.response.use(undefined, (error) => {
	return Promise.reject(error);
});

export const getFromApi = async (
	url: `/movies/${string}` | `/tv/${string}`,
	page?: number,
	query?: string,
) => {
	const params = query ? { query: query, page: page } : { page: page };
	const response = await instance.get(BASE_URL + url, {
		params: params,
	});
	return response.data;
};

export const getFromAPIFiltered = async (
	IDs: number[],
	api: "movies" | "tv",
) => {
	const response = await instance.get(
		`${BASE_URL}/${api}/filter?genres=${IDs.join(",")}`,
	);
	return response.data;
};

export const getAvailableGenres = async (api: "movies" | "tv") => {
	const response = await instance.get(`${BASE_URL}/${api}/genres`);
	return response.data;
};
