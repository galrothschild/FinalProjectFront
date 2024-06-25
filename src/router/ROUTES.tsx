import App from "../App";
import MoviePage from "../movies/pages/MoviePage";
import MoviesPage from "../movies/pages/MoviesPage";
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
		path: "/movies",
		element: <MoviesPage />,
	},
	{
		path: "/movies/:id",
		element: <MoviePage />,
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
