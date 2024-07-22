import { Card, Button } from "flowbite-react";

const About = () => {
	return (
		<div className="container mx-auto p-4 dark:text-white">
			<Card className="mb-4">
				<h1 className="text-3xl font-bold mb-2">About MyMovies</h1>
				<p className="text-lg">
					Welcome to MyMovies, your personal movie and TV show management
					platform. Our goal is to provide an easy-to-use interface for keeping
					track of what you’ve watched and what you plan to watch next. MyMovies
					is built using the MERN stack, combining the power of MongoDB,
					Express.js, React, and Node.js to deliver a seamless experience.
				</p>
			</Card>

			<Card className="mb-4">
				<h2 className="text-2xl font-semibold mb-2">Features</h2>
				<ul className="list-disc pl-5">
					<li className="mb-1">Register and login to your account</li>
					<li className="mb-1">Update your profile information</li>
					<li className="mb-1">Delete your account if needed</li>
					<li className="mb-1">
						Fetch the latest movies and TV shows from TMDB
					</li>
					<li className="mb-1">Mark movies and TV shows as watched</li>
					<li className="mb-1">Add movies and TV shows to your watchlist</li>
				</ul>
			</Card>

			<Card className="mb-4">
				<h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
				<ul className="list-disc pl-5">
					<li className="mb-1">MongoDB for the database</li>
					<li className="mb-1">Express.js for the backend framework</li>
					<li className="mb-1">React for the frontend framework</li>
					<li className="mb-1">Node.js for the server runtime environment</li>
					<li className="mb-1">Flowbite-React for UI components</li>
				</ul>
			</Card>

			<Card className="mb-4">
				<h2 className="text-2xl font-semibold mb-2">How It Works</h2>
				<p className="text-lg">
					Once you register and log in, you can browse the latest movies and TV
					shows fetched from TMDB. You can mark items as watched or add them to
					your watchlist for future viewing. You can also update your profile
					information or delete your account if needed. All your data is
					securely stored in our database.
				</p>
			</Card>

			<Card className="mb-4">
				<h2 className="text-2xl font-semibold mb-2">Get Started</h2>
				<Button href="/register" gradientMonochrome="info">
					Register Now
				</Button>
			</Card>
		</div>
	);
};

export default About;
