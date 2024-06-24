import { Card } from "flowbite-react";

type CardPropTypes = {
	imgSrc: string;
	title: string;
	description: string;
};

const CardComponent: React.FC<CardPropTypes> = ({
	imgSrc,
	title,
	description,
}) => {
	return (
		<Card
			className="max-w-sm"
			imgSrc={`https://image.tmdb.org/t/p/w500/${imgSrc}`}
			imgAlt={title}
			horizontal
			href="#"
		>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
		</Card>
	);
};

export default CardComponent;
