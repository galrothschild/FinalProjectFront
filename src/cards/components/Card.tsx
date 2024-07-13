import { Button, Card } from "flowbite-react";

type CardPropTypes = {
	imgSrc: string;
	title: string;
	description: string;
	genres: string;
	id: number;
	url: string;
};

// TODO: Make text overflow ellipsis normally
const CardComponent: React.FC<CardPropTypes> = ({
	imgSrc,
	title,
	description,
	genres,
	id,
	url,
}) => {
	return (
		<Card
			className="max-w-sm xl:basis-1/2"
			imgSrc={imgSrc}
			imgAlt={title}
			horizontal
			// href={`/${url}/${id}`}
		>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="text-sm text-gray-500 dark:text-gray-400">{genres}</p>
			<p
				className="w-full font-normal text-gray-700 dark:text-gray-400  mb-auto text-ellipsis overflow-y-hidden whitespace-wrap line-clamp-4"
				title={description}
			>
				{description}
			</p>
			<div className="flex gap-2 flex-col sm:flex-row">
				<Button
					className="hover:brightness-95"
					href={`/${url}/${id}`}
					onClick={() => addToWatchlist(url)}
				>
					Add to Watchlist
				</Button>
				<Button
					className="hover:brightness-95"
					href={`/${url}/${id}`}
					onClick={() => markAsWatched(url)}
				>
					Mark as Watched
				</Button>
			</div>
		</Card>
	);
};

export default CardComponent;
