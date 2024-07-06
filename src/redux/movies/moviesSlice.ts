import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IMovie } from "../../movies/models/IMovie.model";

type movieState = {
	movies: IMovie[];
	isLoading: boolean;
	genres: number[];
};

export const initialState: movieState = {
	movies: [],
	isLoading: false,
	genres: [],
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
		setGenres: (state, action: PayloadAction<number[]>) => {
			state.genres = action.payload;
		},
	},
});

export const { setMovies, setLoading, setGenres } = moviesSlice.actions;
export default moviesSlice.reducer;
