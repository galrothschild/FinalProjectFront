import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ITVShow } from "../../tv/models/ITVShow.model";

type movieState = {
	shows: ITVShow[];
	isLoading: boolean;
};

export const initialState: movieState = {
	shows: [],
	isLoading: false,
};

const showSlice = createSlice({
	name: "shows",
	initialState,
	reducers: {
		setShows: (state, action: PayloadAction<ITVShow[]>) => {
			state.shows = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setShows, setLoading } = showSlice.actions;
export default showSlice.reducer;
