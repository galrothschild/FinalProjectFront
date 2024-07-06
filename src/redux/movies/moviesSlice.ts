import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Genre, IMovie } from "../../movies/models/IMovie.model";

type movieState = {
	movies: IMovie[];
	isLoading: boolean;
	genres: number[];
	availableGenres: Genre[];
};

export const initialState: movieState = {
	movies: [],
	isLoading: false,
	genres: [],
	availableGenres: [],
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
		setMovieGenres: (state, action: PayloadAction<number[]>) => {
			state.genres = action.payload;
		},
		setAvailableMovieGenres: (state, action: PayloadAction<Genre[]>) => {
			state.availableGenres = action.payload;
		},
	},
});

export const {
	setMovies,
	setLoading,
	setMovieGenres,
	setAvailableMovieGenres,
} = moviesSlice.actions;
export default moviesSlice.reducer;
