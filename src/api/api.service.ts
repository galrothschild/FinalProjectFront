import axios from "axios";
import { getNewAccessToken } from "../users/utils/usersApi.service";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1234";
export const instance = axios.create({ baseURL: BASE_URL });
instance.interceptors.response.use(undefined, (error) => {
	return Promise.reject(error);
});
instance.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem("authToken"); // Function to get access token from your store
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && originalRequest._retry) {
			originalRequest._retry = true;
			const newToken = await getNewAccessToken();
			// biome-ignore lint/complexity/useLiteralKeys: <explanation>
			axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
			return instance(originalRequest);
		}
		return Promise.reject(error);
	},
);
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
	try {
		const response = await instance.get(`${BASE_URL}/${api}/genres`);
		return response.data;
	} catch (error) {
		return Promise.reject([]);
	}
};

export const postToApi = async (
	api:
		| "movies"
		| "tv"
		| "users"
		| "users/login"
		| "users/refresh-token"
		| "users/logout",
	data: unknown,
) => {
	const response = await instance.post(`/${api}`, data, {
		withCredentials: true,
	});
	return response.data;
};

export const getFromApiById = async (
	url: "users" | "movies" | "tv",
	id: string,
) => {
	const response = await instance.get(`${BASE_URL}/${url}/${id}`);
	return response.data;
};
