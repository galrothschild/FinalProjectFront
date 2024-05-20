import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "./ROUTES";

export const router = createBrowserRouter(
	createRoutesFromElements(
		ROUTES.map((route) => (
			<Route key={route.path} path={route.path} element={route.element} />
		)),
	),
);
