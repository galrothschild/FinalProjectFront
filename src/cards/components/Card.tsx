import { Button, Card } from "flowbite-react";
import { addToWatchlist, markAsWatched } from "../utils/cardsAPI";
import { useToast } from "../../toast/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AddRemoveEntry } from "../../redux/user/userSlice";

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
	const dispatch = useDispatch();
	const Lists = useSelector((state: RootState) => state.user.Lists);
	const typeMap: { [key: string]: "tv show" | "movie" } = {
		tv: "tv show",
		movies: "movie",
	};
	const watched = Lists.watched.find(
		(entry) => +entry.id === id && entry.type === typeMap[url],
	);
	const watchlist = Lists.watchList.find(
		(entry) => +entry.id === id && entry.type === typeMap[url],
	);
	const handleWatched = async () => {
		const response = await markAsWatched(url, String(id));
		invokeToast(response, "success");
		dispatch(
			AddRemoveEntry({
				list: "watched",
				entry: { id: String(id), type: typeMap[url] },
			}),
		);
	};
	const handleWatchlist = async () => {
		const response = await addToWatchlist(url, String(id));
		invokeToast(response, "success");
		dispatch(
			AddRemoveEntry({
				list: "watchList",
				entry: { id: String(id), type: typeMap[url] },
			}),
		);
	};
	return (
		<Card
			className="max-w-sm xl:basis-1/2"
			imgSrc={imgSrc}
			imgAlt={title}
			horizontal
		>
			<a href={`/${url}/${id}`}>
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
			</a>
			<div className="flex gap-2 flex-col sm:flex-row">
				<Button
					className="hover:brightness-95"
					color={watchlist ? "red" : "blue"}
					onClick={handleWatchlist}
				>
					{watchlist ? "Remove from List" : "Add to Watchlist"}
				</Button>
				<Button
					className="hover:brightness-95 "
					color={watched ? "red" : "blue"}
					onClick={handleWatched}
				>
					{watched ? "Mark as Unwatched" : "Mark as Watched"}
				</Button>
			</div>
		</Card>
	);
};

export default CardComponent;
