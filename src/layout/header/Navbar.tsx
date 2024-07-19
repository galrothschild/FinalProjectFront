import { Navbar, DarkThemeToggle, Button } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";
import style from "./navbar.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ProfileButton from "./ProfileButton";
const NavbarComponent = () => {
	const { isLogged, isAdmin } = useSelector((state: RootState) => state.user);
	return (
		<Navbar fluid rounded className={style.nav}>
			<Navbar.Brand href="/">
				<img
					src="/logo.png"
					className="mr-3 h-5 sm:h-9 xs:h-6"
					alt="My Movies Logo"
				/>
			</Navbar.Brand>

			<div className="md:order-2 flex">
				<DarkThemeToggle />
				<Navbar.Toggle />
				{isLogged ? (
					<ProfileButton />
				) : (
					<>
						<Button className="ml-2 hidden sm:block" href="/login">
							Sign In
						</Button>
						<Button className="ml-2 hidden sm:block" href="/signup">
							Sign Up
						</Button>
					</>
				)}
			</div>
			<Navbar.Collapse>
				<NavLink to="/" label="Home" />
				<NavLink to="/tv" label="TV Shows" />
				<NavLink to="/movies" label="Movies" />
				<NavLink to="/watchlist" label="Watchlist" />
				<NavLink to="/about" label="About" />
				{isAdmin && (
					<>
						<NavLink to="/admin" label="Admin" />
						<NavLink to="/sandbox" label="Sandbox" />
					</>
				)}
				{!isLogged && (
					<>
						<NavLink to="/login" label="Login" className="block sm:hidden" />
						<NavLink to="/signup" label="Sign Up" className="block sm:hidden" />
					</>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
