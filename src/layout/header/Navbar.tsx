import { Navbar } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";

const NavbarComponent = () => {
	return (
		<Navbar fluid rounded>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<NavLink to="/" label="Home" />
				<NavLink to="/about" label="About" />
				<NavLink to="/services" label="Services" />
				<NavLink to="/pricing" label="Pricing" />
				<NavLink to="/contact" label="Contact" />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
