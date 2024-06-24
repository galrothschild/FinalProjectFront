import axios from "axios";

const instance = axios.create();
const BASE_URL = import.meta.env.VITE_API_URL;
instance.interceptors.response.use(undefined, (error) => {
	return Promise.reject(error);
});

export const getFromApi = async (url: string) => {
	const response = await instance.get(BASE_URL + url);
	return response.data;
};
