import { useSelector, useDispatch } from "react-redux";
import ToastComponent from "./ToastComponent";
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

	return (
		<div
			className={`flex flex-col gap-3 fixed ${
				position.includes("top") ? "top-3" : "bottom-3"
			} ${position.includes("right") ? "right-3" : "left-3"} md:top-20 md:right-3 md:left-auto z-50`}
		>
			{toasts.map((toast, index) => (
				<ToastComponent
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					message={toast.message}
					type={toast.type}
				/>
			))}
		</div>
	);
};

export default ToastStack;
