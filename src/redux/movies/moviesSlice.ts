import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IMovie } from "../../movies/models/IMovie.model";

type movieState = {
	movies: IMovie[];
	isLoading: boolean;
};

export const initialState: movieState = {
	movies: [],
	isLoading: false,
};

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		setMovies: (state, action: PayloadAction<IMovie[]>) => {
			state.movies = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setMovies, setLoading } = moviesSlice.actions;
export default moviesSlice.reducer;
