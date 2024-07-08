import App from "../App";
import MoviePage from "../movies/pages/MoviePage";
import MoviesPage from "../movies/pages/MoviesPage";
import TVShowPage from "../tv/pages/TVShowPage";
import TVShowsPage from "../tv/pages/TVShowsPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
type route = {
	path: string;
	element: JSX.Element;
};

export const ROUTES: route[] = [
	{
		path: "/",
		element: <MoviesPage />,
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
		element: <App />,
	},
	{
		path: "/services",
		element: <App />,
	},
	{
		path: "/pricing",
		element: <App />,
	},
	{
		path: "/contact",
		element: <App />,
	},
];
