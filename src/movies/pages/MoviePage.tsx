import React from "react";
import PaginatedLayout from "../../layout/special/PaginatedLayout";
import CardsPage from "../../cards/pages/CardsPage";

const MoviePage = () => {
	return (
		<PaginatedLayout>
			<CardsPage />
		</PaginatedLayout>
	);
};

export default MoviePage;
