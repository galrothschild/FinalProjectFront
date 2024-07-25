import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CardData } from "../../cards/pages/CardsPage";

type cardsState = {
	cards: CardData[];
	isLoading: boolean;
	view: "grid" | "list";
};

export const initialState: cardsState = {
	cards: [],
	isLoading: false,
	view: "grid",
};

const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		setCards: (state, action: PayloadAction<CardData[]>) => {
			state.cards = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		toggleView: (state) => {
			state.view = state.view === "grid" ? "list" : "grid";
		},
	},
});

export const { setCards, setLoading, toggleView } = cardsSlice.actions;
export default cardsSlice.reducer;
