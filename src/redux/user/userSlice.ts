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
		firstName: "",
		lastName: "",
		middleName: "",
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
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
