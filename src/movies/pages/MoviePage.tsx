import React from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { Avatar, Card } from "flowbite-react";

const MoviePage = () => {
	const { id } = useParams<{ id: string }>();
	if (!id || Number.isNaN(id)) {
		return <div>Movie not found</div>;
	}
	const { movie, loading } = useMovie(+id);
	if (loading) {
		return <div>Loading...</div>;
	}
	if (!movie) {
		return <div>Movie not found</div>;
	}
	return (
		<div className="p-4 flex  items-center">
			<img
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={movie.title}
			/>
			<div className="flex flex-col gap-5">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{movie.title}
				</h5>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					{movie.genres.map((genre) => genre.name).join(", ")}
				</p>
				<p
					className="font-normal text-gray-700 dark:text-gray-400  mb-auto text-ellipsis overflow-y-hidden whitespace-wrap line-clamp-5"
					title={movie.overview}
				>
					{movie.overview}
				</p>
			</div>
		</div>
	);
};

export default MoviePage;
