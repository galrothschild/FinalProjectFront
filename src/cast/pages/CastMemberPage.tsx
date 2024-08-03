import { useNavigate, useParams } from "react-router-dom";
import { Card, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import type { ICastMember } from "../../utils/common.model";
import { useToast } from "../../toast/hooks/useToast";
import { getFromApi } from "../../api/api.service";

type ICredit = {
	name?: string;
	title?: string;
	poster_path: string;
	id: number;
	role: string;
	type: "movie" | "tvshow";
};

const CastMemberPage = () => {
	const invokeToast = useToast();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState({
		castMember: true,
		credits: true,
	});
	const [castMember, setCastMember] = useState<ICastMember>();
	const [credits, setCredits] = useState<ICredit[]>([]);
	const { id } = useParams<{ id: string }>();
	if (!id || Number.isNaN(id)) {
		invokeToast("Cast member not found", "error");
		navigate(-1);
	}

	const getCastMember = async (id: number) => {
		try {
			setIsLoading({ castMember: true, credits: true });
			const castMember = await getFromApi(`/credits/${id}`);
			setCastMember(castMember);
			setIsLoading({ castMember: false, credits: true });
			const credits = await getFromApi(`/credits/${id}/credits`);
			setCredits(credits);
			invokeToast("Cast member found", "success");
		} catch (error) {
			console.log(error);
			invokeToast("Cast member not found", "error");
			navigate(-1);
		}
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (id) {
			getCastMember(+id).then(() =>
				setIsLoading({ castMember: false, credits: false }),
			);
		}
	}, []);

	return (
		<>
			{isLoading.castMember ? (
				<Spinner />
			) : (
				<div className="w-full">
					<div className="w-full h-full p-10 flex  items-center gap-8 linear-grad-dark flex-col md:flex-row">
						<img
							src={castMember?.profile_path}
							alt={castMember?.name}
							className="w-[200px]"
						/>
						<div className="flex flex-col gap-5">
							<h5 className="text-2xl font-bold tracking-tight  text-white">
								{castMember?.name}
							</h5>
							<p className="text-sm text-gray-400 ">
								Known for {castMember?.known_for_department}
							</p>
						</div>
					</div>
				</div>
			)}
			{isLoading.credits ? (
				<Spinner />
			) : (
				<div className="flex gap-5 overflow-x-auto w-full">
					{credits.map((credit) => {
						const title = credit.type === "tvshow" ? credit.name : credit.title;
						return (
							<Card
								theme={{ root: { children: "p-2" } }}
								key={title}
								className="flex flex-col items-center w-28 cursor-pointer"
								onClick={() =>
									navigate(
										`/${credit.type === "tvshow" ? "tv" : "movies"}/${credit.id}`,
									)
								}
							>
								<img
									src={credit.poster_path}
									alt={title}
									className="rounded-sm mb-1 w-24 h-36 object-cover"
								/>
								<p className="text-sm font-semibold dark:text-white w-24 whitespace-wrap line-clamp-4">
									{title}
								</p>
								<p className="text-xs text-gray-400 mt-1">
									{credit.type === "movie" ? "Movie" : "TV Show"}
								</p>
								<p className="text-xs text-gray-400 mt-3">{credit.role}</p>
							</Card>
						);
					})}
				</div>
			)}
		</>
	);
};

export default CastMemberPage;
