import App from "../App";
import CardsPage from "../cards/pages/CardsPage";
type route = {
	path: string;
	element: JSX.Element;
};

export const ROUTES: route[] = [
	{
		path: "/",
		element: <CardsPage />,
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
