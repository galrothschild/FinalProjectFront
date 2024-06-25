import { Navbar, DarkThemeToggle } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";

const NavbarComponent = () => {
	return (
		<Navbar
			fluid
			rounded
			className="shadow-lg sticky top-0 w-full dark:shadow-sm-light z-10"
		>
			<Navbar.Brand href="/">
				<img
					src="/logo.png"
					className="mr-3 h-5 sm:h-9 xs:h-6"
					alt="My Movies Logo"
				/>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<DarkThemeToggle />
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<NavLink to="/" label="Home" />
				<NavLink to="/about" label="About" />
				<NavLink to="/services" label="Services" />
				<NavLink to="/contact" label="Contact" />
				<NavLink to="/pricing" label="Pricing" />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
