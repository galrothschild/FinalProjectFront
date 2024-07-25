import { Card } from "flowbite-react";
import "./DetailsPage.css";
type DetailsPageProps = {
	poster: string;
	title: string;
	genres: string[];
	overview: string;
	backdrop: string;
	cast: { name: string; profile_path: string; character: string }[];
};

const DetailsPage: React.FC<DetailsPageProps> = ({
	poster,
	title,
	genres,
	overview,
	backdrop,
	cast,
}) => {
	return (
		<>
			<div
				className="w-full"
				style={{
					backgroundImage: `url(${backdrop})`,
				}}
			>
				<div className="w-full h-full p-10 flex  items-center gap-8 linear-grad-dark">
					<img src={poster} alt={title} />
					<div className="flex flex-col gap-5">
						<h5 className="text-2xl font-bold tracking-tight  text-white">
							{title}
						</h5>
						<p className="text-sm text-gray-400 ">{genres.join(", ")}</p>
						<p
							className="font-normal text-gray-400  mb-auto text-ellipsis overflow-y-hidden whitespace-wrap line-clamp-5"
							title={overview}
						>
							{overview}
						</p>
					</div>
				</div>
			</div>
			<div className="flex gap-5 overflow-x-auto w-full">
				{cast.map((castMember) => (
					<Card
						theme={{ root: { children: "p-2" } }}
						key={castMember.name}
						className="flex flex-col items-center w-28 "
					>
						<img
							src={castMember.profile_path}
							alt={castMember.name}
							className="rounded-sm mb-1 w-24 h-36"
						/>
						<p className="text-sm font-semibold dark:text-white w-24">
							{castMember.name}
						</p>
						<p className="text-xs text-gray-400 mt-3">{castMember.character}</p>
					</Card>
				))}
			</div>
		</>
	);
};

export default DetailsPage;
