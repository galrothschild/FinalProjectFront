import { useSelector, useDispatch } from "react-redux";
import ToastComponent from "./ToastComponent";
import { ToastContainer } from "react-toastify";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { removeToast } from "../redux/toast/toastSlice";

type ToastStackProps = {
	position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

const ToastStack: React.FC<ToastStackProps> = ({ position }) => {
	const toasts = useSelector((state: RootState) => state.toast.toasts);
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (toasts.length > 0) {
				dispatch(removeToast());
			}
		}, 4000); // Toast duration
		return () => clearTimeout(timer);
	}, [toasts, dispatch]);

	return <ToastContainer />;
};

export default ToastStack;
