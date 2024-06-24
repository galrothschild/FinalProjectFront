import CardComponent from "../components/Card";

const CardsPage = () => {
	return (
		<div className="flex gap-3 flex-wrap justify-center">
			{[1, 2, 3, 4, 5].map((val) => (
				<CardComponent
					key={`${val}-card`}
					description="A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him."
					imgSrc="/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
					title="Forrest Gump"
				/>
			))}
		</div>
	);
};

export default CardsPage;
