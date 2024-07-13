import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type toastState = {
	toasts: { message: string; type: "info" | "success" | "error" }[];
};

const initialState: toastState = {
	toasts: [],
};

const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		addToast: (
			state,
			action: PayloadAction<{
				message: string;
				type: "info" | "success" | "error";
			}>,
		) => {
			if (state.toasts.length <= 3) {
				state.toasts.push(action.payload);
			}
		},
		removeToast: (state) => {
			state.toasts.shift();
		},
	},
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
