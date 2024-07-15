import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../users/data/User.model";

type ListEntry = { id: string; type: "movie" | "tv show"; watched: boolean };

type userSliceState = {
	user: IUser;
	token: string;
	isLogged: boolean;
	watchList: ListEntry[];
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

	watchList: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.watchList = action.payload.watchList;
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
				entry: ListEntry;
			}>,
		) => {
			const { entry } = action.payload;
			const index = state.watchList.findIndex(
				(listEntry) =>
					listEntry.id === entry.id && listEntry.type === entry.type,
			);
			if (index === -1) {
				state.watchList.push(entry);
				return;
			}
			if (state.watchList[index].watched !== entry.watched) {
				state.watchList[index].watched = entry.watched;
				return;
			}
			state.watchList.splice(index, 1);
		},
		setWatchlist: (state, action) => {
			state.watchList = action.payload;
		},
	},
});

export const { setUser, setToken, logout, AddRemoveEntry, setWatchlist } =
	userSlice.actions;
export default userSlice.reducer;
