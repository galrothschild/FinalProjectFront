import axios from "axios";

const instance = axios.create();
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1234";
instance.interceptors.response.use(undefined, (error) => {
	return Promise.reject(error);
});

export const getFromApi = async (
	url: string,
	page?: number,
	query?: string,
) => {
	const params = query ? { query: query } : { page: page };
	const response = await instance.get(BASE_URL + url, {
		params: params,
	});
	return response.data;
};
