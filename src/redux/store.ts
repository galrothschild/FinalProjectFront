import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import pageReducer from "./pages/pageSlice";
import cardsReducer from "./cards/cardsSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		page: pageReducer,
		cards: cardsReducer,
		search: searchReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
