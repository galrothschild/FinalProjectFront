import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../users/data/User.model";

type userSliceState = {
	user: IUser;
	token: string;
	isLogged: boolean;
};

const initialState: userSliceState = {
	user: {
		username: "",
		email: "",
		image: "",
		name: {
			first: "",
			middle: "",
			last: "",
		},
		age: 0,
		_id: "",
	},
	token: "",
	isLogged: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		logout: (state) => {
			state.user = initialState.user;
			state.isLogged = false;
			state.token = "";
		},
	},
});

export const { setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;
