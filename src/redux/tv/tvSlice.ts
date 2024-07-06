import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ITVShow } from "../../tv/models/ITVShow.model";
import type { Genre } from "../../movies/models/IMovie.model";

type tvState = {
	shows: ITVShow[];
	isLoading: boolean;
	genres: number[];
	availableGenres: Genre[];
};

export const initialState: tvState = {
	shows: [],
	isLoading: false,
	genres: [],
	availableGenres: [],
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
		setShowGenres: (state, action: PayloadAction<number[]>) => {
			state.genres = action.payload;
		},
		setAvailableShowGenres: (state, action: PayloadAction<Genre[]>) => {
			state.availableGenres = action.payload;
		},
	},
});

export const { setShows, setLoading, setShowGenres, setAvailableShowGenres } =
	showSlice.actions;
export default showSlice.reducer;
