import { useParams } from "react-router-dom";
import { useTVShow } from "../hooks/useTVShow";
import DetailsPage from "../../pages/DetailsPage";

const TVShowPage = () => {
	const { id } = useParams<{ id: string }>();
	if (!id || Number.isNaN(id)) {
		return <div>Show not found</div>;
	}
	const { show, loading } = useTVShow(+id);
	if (loading) {
		return <div>Loading...</div>;
	}
	if (!show) {
		return <div>Movie not found</div>;
	}
	return (
		<DetailsPage
			title={show.name}
			poster={show.poster_path}
			overview={show.overview}
			genres={show.genres.map((genre) => genre.name)}
			backdrop={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${show.backdrop_path}`}
		/>
	);
};

export default TVShowPage;
