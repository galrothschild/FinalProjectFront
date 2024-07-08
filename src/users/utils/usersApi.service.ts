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

const getUser = async (id: string) => {
	const response = await getFromApiById("users", id);
	return response;
};
