import { useDispatch } from "react-redux";
import { addToast, removeToast } from "../../redux/toast/toastSlice";

export const useToast = () => {
	const dispatch = useDispatch();
	const invokeToast = (message: string, type: "info" | "success" | "error") => {
		dispatch(addToast({ message, type }));
		setTimeout(() => {
			dispatch(removeToast());
		}, 5000);
	};

	return invokeToast;
};
