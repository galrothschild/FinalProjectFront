import PaginatedLayout from "../../layout/special/PaginatedLayout";
import CardsPage from "../../cards/pages/CardsPage";

const MoviesPage = () => {
	return (
		<PaginatedLayout>
			<CardsPage />
		</PaginatedLayout>
	);
};

export default MoviesPage;
