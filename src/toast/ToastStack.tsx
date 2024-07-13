import ToastComponent from "./ToastComponent";
import { Toast } from "flowbite-react";

type ToastStackProps = {
	position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

const ToastStack: React.FC<ToastStackProps> = () => {
	const toasts: { message: string; type: "info" | "success" | "error" }[] = [
		{ message: "You have been logged out", type: "info" },
		{ message: "Welcome back!", type: "success" },
		{ message: "Welcome back!", type: "error" },
	];
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
