import { useSelector } from "react-redux";
import ToastComponent from "./ToastComponent";
import type { RootState } from "../redux/store";

type ToastStackProps = {
	position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

const ToastStack: React.FC<ToastStackProps> = () => {
	const toasts = useSelector((state: RootState) => state.toast.toasts);
	return (
		<div
			className={
				"flex flex-col gap-3 fixed bottom-3 left-3 md:top-20 md:right-3 md:left-auto "
			}
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
