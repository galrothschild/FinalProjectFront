import App from "../App";
type route = {
	path: string;
	element: JSX.Element;
};

export const ROUTES: route[] = [
	{
		path: "/",
		element: <App />,
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
