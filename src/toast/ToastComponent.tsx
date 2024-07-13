import { Toast } from "flowbite-react";
import { useState } from "react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

type ToastComponentProps = {
	message: string;
	type: "success" | "error" | "info";
};

const ToastComponent: React.FC<ToastComponentProps> = ({ message, type }) => {
	const [show, setShow] = useState(true);
	const getToastType = (type: string) => {
		switch (type) {
			case "success":
				return (
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
						<HiCheck className="h-5 w-5" />
					</div>
				);
			case "error":
				return (
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
						<HiX className="h-5 w-5" />
					</div>
				);
			case "info":
				return (
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
						<HiExclamation className="h-5 w-5" />
					</div>
				);
			default:
				return;
		}
	};
	return (
		<Toast className="p-4 rounded-md">
			{getToastType(type)}
			<div className="ml-3 text-sm font-normal">{message}</div>
		</Toast>
	);
};

export default ToastComponent;
