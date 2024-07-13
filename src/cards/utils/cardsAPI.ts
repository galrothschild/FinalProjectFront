import { patchToApi } from "../../api/api.service";

export const markAsWatched = async (url: "movies" | "tv", id: number) => {
	try {
		return await patchToApi(url, id, true);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const addToWatchlist = async (url: "movies" | "tv", id: number) => {
	try {
		return await patchToApi(url, id, false);
	} catch (error) {
		return Promise.reject(error);
	}
};
