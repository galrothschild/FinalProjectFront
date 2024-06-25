import axios from "axios";

const instance = axios.create();
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
instance.interceptors.response.use(undefined, (error) => {
	return Promise.reject(error);
});

export const getFromApi = async (url: string, page?: number) => {
	const response = await instance.get(BASE_URL + url, {
		params: { page: page },
	});
	return response.data;
};
