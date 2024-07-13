import { Button, Card } from "flowbite-react";
import { addToWatchlist, markAsWatched } from "../utils/cardsAPI";
import { useToast } from "../../toast/hooks/useToast";

type CardPropTypes = {
	imgSrc: string;
	title: string;
	description: string;
	genres: string;
	id: number;
	url: "movies" | "tv";
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
	const invokeToast = useToast();
	const handleWatched = async () => {
		const response = await markAsWatched(url, id);
		invokeToast(response, "success");
	};
	const handleWatchlist = async () => {
		const response = await addToWatchlist(url, id);
		invokeToast(response, "success");
	};
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
				<Button className="hover:brightness-95" onClick={handleWatchlist}>
					Add to Watchlist
				</Button>
				<Button className="hover:brightness-95" onClick={handleWatched}>
					Mark as Watched
				</Button>
			</div>
		</Card>
	);
};

export default CardComponent;
