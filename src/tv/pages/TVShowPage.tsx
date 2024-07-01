import React from "react";
import { useParams } from "react-router-dom";
import { useTVShow } from "../hooks/useTVShow";

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
		<div className="p-4 flex  items-center">
			<img
				src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
				alt={show.name}
			/>
			<div className="flex flex-col gap-5">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{show.name}
				</h5>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					{show.genres.map((genre) => genre.name).join(", ")}
				</p>
				<p
					className="font-normal text-gray-700 dark:text-gray-400  mb-auto text-ellipsis overflow-y-hidden whitespace-wrap line-clamp-5"
					title={show.overview}
				>
					{show.overview}
				</p>
			</div>
		</div>
	);
};

export default TVShowPage;
