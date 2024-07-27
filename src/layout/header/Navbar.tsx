import { Navbar, DarkThemeToggle, Button } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";
import style from "./navbar.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ProfileButton from "./ProfileButton";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
	const { isLogged, isAdmin } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();
	return (
		<Navbar fluid rounded className={style.nav}>
			<Navbar.Brand
				onClick={() => {
					navigate("/");
				}}
			>
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
						<Button
							className="ml-2 hidden sm:block"
							onClick={() => navigate("/login")}
						>
							Sign In
						</Button>
						<Button
							className="ml-2 hidden sm:block"
							onClick={() => navigate("/signup")}
						>
							Sign Up
						</Button>
					</>
				)}
			</div>
			<Navbar.Collapse>
				{isLogged && (
					<>
						<NavLink to="/movies" label="Movies" />
						<NavLink to="/tv" label="TV Shows" />
						<NavLink to="/watchlist" label="Watchlist" />
					</>
				)}
				{!isLogged && (
					<>
						<NavLink to="/" label="Home" />
						<NavLink to="/about" label="About" />
						<NavLink to="/login" label="Login" className="block sm:hidden" />
						<NavLink to="/signup" label="Sign Up" className="block sm:hidden" />
					</>
				)}
				{isAdmin && (
					<>
						<NavLink to="/admin" label="Admin" />
						<NavLink to="/sandbox" label="Sandbox" />
					</>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
