import { Navbar } from "flowbite-react";
import { useLinkClickHandler, useLocation } from "react-router-dom";
import { setSearch } from "../../redux/search/searchSlice";
import type { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
type NavLinkType = {
	to: string;
	label: string;
	className?: string;
};

const NavLink = ({ to, label, className }: NavLinkType) => {
	const clickHandler = useLinkClickHandler(to);
	const dispatch = useDispatch<AppDispatch>();
	const location = useLocation();
	return (
		<Navbar.Link
			to={to}
			active={location.pathname === to}
			onClick={(e) => {
				dispatch(setSearch(""));
				clickHandler(e);
			}}
			className={`${className} cursor-pointer`}
		>
			{label}
		</Navbar.Link>
	);
};

export default NavLink;
