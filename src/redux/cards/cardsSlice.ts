import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CardData } from "../../cards/pages/CardsPage";

type cardsState = {
	cards: CardData[];
	isLoading: boolean;
};

export const initialState: cardsState = {
	cards: [],
	isLoading: false,
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
	},
});

export const { setCards, setLoading } = cardsSlice.actions;
export default cardsSlice.reducer;
