import { Pagination } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import type { RootState } from "../../redux/store";
import { setPage } from "../../redux/pages/pageSlice";
const PaginationComponent = () => {
	const dispatch = useDispatch<AppDispatch>();
	const currentPage = useSelector((state: RootState) => state.page.page);
	const totalPages = useSelector((state: RootState) => state.page.total_pages);
	const onPageChange = (page: number) => dispatch(setPage(page));
	return (
		<div className="flex overflow-x-auto w-full sm:justify-center">
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={onPageChange}
				showIcons
				nextLabel=""
				previousLabel=""
			/>
		</div>
	);
};

export default PaginationComponent;
