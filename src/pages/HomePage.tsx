const cards = [
	{
		id: 1022789,
		description:
			"Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
		genres: "Animation, Family, Adventure, Comedy",
		imgSrc: "https://image.tmdb.org/t/p/w200/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
		title: "Inside Out 2",
		url: "movies",
	},
	{
		id: 519182,
		description:
			"Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
		genres: "Animation, Family, Comedy, Action",
		imgSrc: "https://image.tmdb.org/t/p/w200/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg",
		title: "Despicable Me 4",
		url: "movies",
	},
];

import { Button } from "flowbite-react";
import CardComponent from "../cards/components/Card";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const HomePage = () => {
	const isLogged = useSelector((state: RootState) => state.user.isLogged);
	if (isLogged) {
		return <Navigate to="/movies" />;
	}
	return (
		<div className="container mx-auto p-4 dark:text-white">
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold mb-2">Welcome to MyMovies</h1>
				<p className="text-lg">
					Your personal movie and TV show management platform.
				</p>

				<div className="mt-4 flex flex-col gap-2">
					<Button href="/login" gradientMonochrome="success">
						Login
					</Button>
					<Button href="/register" gradientMonochrome="info">
						Register
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{cards.map((movie) => (
					<CardComponent
						key={movie.id}
						imgSrc={movie.imgSrc}
						title={movie.title}
						description={movie.description}
						genres={movie.genres}
						url={"movies"}
						id={movie.id}
						disabled={true}
					/>
				))}
			</div>
		</div>
	);
};

export default HomePage;
