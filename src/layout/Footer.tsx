import { Footer } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const FooterComponent: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Footer container className="bottom-0">
			<div className="w-full text-center">
				<div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
					<Footer.Brand
						onClick={() => navigate("/")}
						src="/logo.png"
						alt="MyMovies Logo"
					/>
					<Footer.LinkGroup>
						<Footer.Link
							href="https://www.linkedin.com/in/galrothschild"
							target="_blank"
						>
							LinkedIn
						</Footer.Link>
						<Footer.Link
							href="https://github.com/galrothschild/"
							target="_blank"
						>
							Github
						</Footer.Link>
						<Footer.Link
							href="https://galrothschild.github.io/"
							target="_blank"
						>
							Portfolio
						</Footer.Link>
					</Footer.LinkGroup>
				</div>
				<Footer.Divider />
				<Footer.Copyright href="" by="Gal Rothschild" year={2024} />
			</div>
		</Footer>
	);
};

export default FooterComponent;
