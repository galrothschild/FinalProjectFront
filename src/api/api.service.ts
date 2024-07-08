import { getFromApi } from "./api.service";
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
	page: number,
) => {
	const response = await instance.get(
		`${BASE_URL}/${api}/filter?genres=${IDs.join(",")}&page=${page}`,
	);
	return response.data;
};

export const getAvailableGenres = async (api: "movies" | "tv") => {
	const response = await instance.get(`${BASE_URL}/${api}/genres`);
	return response.data;
};

export const postToApi = async (
	api: "movies" | "tv" | "users" | "users/login",
	data: unknown,
) => {
	const response = await instance.post(`${BASE_URL}/${api}`, data);
	return response.data;
};

export const getFromApiById = async (
	url: "users" | "movies" | "tv",
	id: string,
) => {
	const response = await instance.get(`${BASE_URL}/${url}/${id}`);
	return response.data;
};
