import { getFromApiById, postToApi } from "../../api/api.service";
import type { IUser, TokenPayload } from "../data/User.model";

export const login = async (data: { username: string; password: string }) => {
	try {
		const token = await postToApi("users/login", data);
		localStorage.setItem("authToken", token);
		const decodedToken = decodeToken(token) as TokenPayload;
		const user = (await getUser(decodedToken._id)) as IUser;
		return user;
	} catch (error) {
		const {
			response: { data, status },
		} = error as { response: { data: { message: string }; status: number } };
		return Promise.reject({ data, status });
	}
};
const decodeToken = (token: string) => {
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split("")
			.map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
			.join(""),
	);
	return JSON.parse(jsonPayload);
};

export const getUser = async (id: string) => {
	const response = await getFromApiById("users", id);
	return response;
};

export const register = async (data: IUser) => {
	try {
		const user = await postToApi("users", data);
		return user;
	} catch (error) {
		const {
			response: { data, status },
		} = error as { response: { data: { message: string }; status: number } };
		return { data, status };
	}
};

export const getNewAccessToken = async () => {
	try {
		const response = await postToApi("users/refresh-token", {});
		const accessToken = response;
		localStorage.setItem("authToken", accessToken);
		const decoded = decodeToken(accessToken);
		const user = await getUser(decoded._id);
		return { accessToken, user };
	} catch (error) {
		return Promise.reject(error);
	}
};

export const logoutAPI = () => {
	localStorage.removeItem("authToken");
	try {
		postToApi("users/logout", {});
	} catch (error) {
		console.log(error);
	}
};
