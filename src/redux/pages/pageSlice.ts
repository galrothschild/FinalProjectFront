import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type pageType = {
	page: number;
};

export const initialState: pageType = {
	page: 1,
};

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
	},
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
