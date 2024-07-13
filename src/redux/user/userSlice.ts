import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../users/data/User.model";

type ListEntry = { id: string; type: "movie" | "tv show" };

type userSliceState = {
	user: IUser;
	token: string;
	isLogged: boolean;
	Lists: {
		watchList: ListEntry[];
		watched: ListEntry[];
	};
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
	Lists: {
		watchList: [],
		watched: [],
	},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.Lists = {
				watched: action.payload.watched,
				watchList: action.payload.watchList,
			};
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
		AddRemoveEntry: (
			state,
			action: PayloadAction<{
				list: "watched" | "watchList";
				entry: ListEntry;
			}>,
		) => {
			const { entry, list } = action.payload;
			const index = state.Lists[list].findIndex(
				(listEntry) =>
					listEntry.id === entry.id && listEntry.type === entry.type,
			);
			if (index !== -1) {
				state.Lists[list].splice(index, 1);
				return;
			}
			state.Lists[list].push(entry);
		},
		setLists: (state, action) => {
			state.Lists = action.payload;
		},
	},
});

export const { setUser, setToken, logout, AddRemoveEntry, setLists } =
	userSlice.actions;
export default userSlice.reducer;
