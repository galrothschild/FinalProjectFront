import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const useToast = () => {
	const dispatch = useDispatch();
	const invokeToast = (message: string, type: "info" | "success" | "error") => {
		toast(message, {
			type,
			position: "top-right",
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return invokeToast;
};
