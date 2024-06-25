import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import pageReducer from "./pages/pageSlice";

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		page: pageReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
