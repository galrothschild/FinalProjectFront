import "./DetailsPage.css";
type DetailsPageProps = {
	poster: string;
	title: string;
	genres: string[];
	overview: string;
	backdrop: string;
};

const DetailsPage: React.FC<DetailsPageProps> = ({
	poster,
	title,
	genres,
	overview,
	backdrop,
}) => {
	return (
		<div
			className="fixed top-0 w-full pt-14"
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
	);
};

export default DetailsPage;
