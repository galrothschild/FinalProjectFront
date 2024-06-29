import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type pageType = {
	page: number;
	total_pages: number;
};

export const initialState: pageType = {
	page: 1,
	total_pages: 100,
};

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setTotalPages: (state, action: PayloadAction<number>) => {
			state.total_pages = action.payload;
		},
	},
});

export const { setPage, setTotalPages } = pageSlice.actions;
export default pageSlice.reducer;
