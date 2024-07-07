import { Navbar, DarkThemeToggle, Button } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";
import style from "./navbar.module.css";
const NavbarComponent = () => {
	return (
		<Navbar fluid rounded className={style.nav}>
			<Navbar.Brand href="/">
				<img
					src="/logo.png"
					className="mr-3 h-5 sm:h-9 xs:h-6"
					alt="My Movies Logo"
				/>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<DarkThemeToggle />
				<Button className="ml-2" href="/login">
					Sign In
				</Button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<NavLink to="/" label="Home" />
				<NavLink to="/tv" label="TV Shows" />
				<NavLink to="/movies" label="Movies" />
				<NavLink to="/contact" label="Contact" />
				<NavLink to="/pricing" label="Pricing" />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
