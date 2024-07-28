import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import DetailsPage from "../../pages/DetailsPage";

const MoviePage = () => {
	const { id } = useParams<{ id: string }>();
	if (!id || Number.isNaN(id)) {
		return <div>Movie not found</div>;
	}
	const { movie, loading, cast } = useMovie(+id);
	if (loading) {
		return <div>Loading...</div>;
	}
	if (!movie) {
		return <div>Movie not found</div>;
	}
	return (
		<DetailsPage
			title={movie.title}
			poster={movie.poster_path}
			overview={movie.overview}
			genres={movie.genres.map((genre) => genre.name)}
			backdrop={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
			cast={cast}
		/>
	);
};

export default MoviePage;
