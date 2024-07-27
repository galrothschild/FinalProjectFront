import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import pageReducer from "./pages/pageSlice";
import cardsReducer from "./cards/cardsSlice";
import searchReducer from "./search/searchSlice";
import showReducer from "./tv/tvSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		page: pageReducer,
		cards: cardsReducer,
		search: searchReducer,
		tv: showReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
