import { Footer } from "flowbite-react";

const FooterComponent: React.FC = () => {
	return (
		<Footer container className="bottom-0">
			<div className="w-full text-center">
				<div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
					<Footer.Brand href="/" src="/public/logo.png" alt="MyMovies Logo" />
					<Footer.LinkGroup>
						<Footer.Link href="/about">About</Footer.Link>
						<Footer.Link href="/movies">Movies</Footer.Link>
						<Footer.Link href="/tv">TV Shows</Footer.Link>
						<Footer.Link href="/">Home</Footer.Link>
					</Footer.LinkGroup>
				</div>
				<Footer.Divider />
				<Footer.Copyright href="/" by="Gal Rothschild" year={2024} />
			</div>
		</Footer>
	);
};

export default FooterComponent;
