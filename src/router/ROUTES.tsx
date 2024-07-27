import MoviePage from "../movies/pages/MoviePage";
import MoviesPage from "../movies/pages/MoviesPage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import Sandbox from "../sandbox/Sandbox";
import TVShowPage from "../tv/pages/TVShowPage";
import TVShowsPage from "../tv/pages/TVShowsPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import UpdateUserPage from "../users/pages/UpdateUserPage";
import UserManagementPage from "../users/pages/UserManagementPage";
import WatchlistPage from "../users/pages/WatchlistPage";
type route = {
	path: string;
	element: JSX.Element;
};

export const ROUTES: route[] = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/watchlist",
		element: <WatchlistPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/movies",
		element: <MoviesPage />,
	},
	{
		path: "/movies/:id",
		element: <MoviePage />,
	},
	{
		path: "/tv",
		element: <TVShowsPage />,
	},
	{
		path: "/tv/:id",
		element: <TVShowPage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
	{
		path: "/sandbox",
		element: <Sandbox />,
	},
	{
		path: "/users/:id",
		element: <UpdateUserPage />,
	},
	{
		path: "/admin/",
		element: <UserManagementPage />,
	},
];
