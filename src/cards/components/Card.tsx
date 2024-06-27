import { Card } from "flowbite-react";

type CardPropTypes = {
	imgSrc: string;
	title: string;
	description: string;
	genres: string;
	id: number;
};

// TODO: Make text overflow ellipsis normally
const CardComponent: React.FC<CardPropTypes> = ({
	imgSrc,
	title,
	description,
	genres,
	id,
}) => {
	return (
		<Card
			className="max-w-sm md:basis-1/2"
			imgSrc={imgSrc}
			imgAlt={title}
			horizontal
			href={`/movies/${id}`}
		>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="text-sm text-gray-500 dark:text-gray-400">{genres}</p>
			<p
				className="font-normal text-gray-700 dark:text-gray-400  mb-auto text-ellipsis overflow-y-hidden whitespace-wrap line-clamp-5"
				title={description}
			>
				{description}
			</p>
		</Card>
	);
};

export default CardComponent;
