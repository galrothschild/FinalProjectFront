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
			state.toasts.push(action.payload);
			setTimeout(() => {
				state.toasts.shift();
			}, 5000);
		},
		removeToast: (state) => {
			state.toasts.shift();
		},
	},
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
