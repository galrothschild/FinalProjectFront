import { getFromApiById, postToApi } from "../../api/api.service";
import type { IUser, TokenPayload } from "../data/User.model";

export const login = async (data: { username: string; password: string }) => {
	const token = await postToApi("users/login", data);
	localStorage.setItem("authToken", token);
	const decodedToken = decodeToken(token) as TokenPayload;
	const user = (await getUser(decodedToken._id)) as IUser;
	return user;
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
	const user = await postToApi("users", data);
	return user;
};

export const getNewAccessToken = async () => {
	try {
		const response = await postToApi("users/refresh-token", {});
		const accessToken = response;
		console.log(accessToken);
		localStorage.setItem("authToken", accessToken);
		const decoded = decodeToken(accessToken);
		const user = await getUser(decoded._id);
		return { accessToken, user };
	} catch (error) {
		console.error("Error refreshing token", error);
	}
};
