import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export const usePages = () => {
	const currentPage = useSelector((state: RootState) => state.page.page);
	return { currentPage };
};
