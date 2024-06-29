import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
	searchTerm: string;
}

const initialState: SearchState = {
	searchTerm: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
