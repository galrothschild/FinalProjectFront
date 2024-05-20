import { Navbar } from "flowbite-react";
import { useLinkClickHandler, useLocation } from "react-router-dom";
type NavLinkType = {
	to: string;
	label: string;
};

const NavLink = ({ to, label }: NavLinkType) => {
	const clickHandler = useLinkClickHandler(to);
	const location = useLocation();
	return (
		<Navbar.Link
			href={to}
			active={location.pathname === to}
			onClick={clickHandler}
		>
			{label}
		</Navbar.Link>
	);
};

export default NavLink;
