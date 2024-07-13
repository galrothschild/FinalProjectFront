import type React from "react";
import PaginationComponent from "../../components/pagination/PaginationComponent";

type PaginatedLayoutProps = {
	children: React.ReactNode;
};

const PaginatedLayout: React.FC<PaginatedLayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col gap-5 overflow-x-auto justify-center">
			<PaginationComponent />
			{children}
			<PaginationComponent />
		</div>
	);
};

export default PaginatedLayout;
