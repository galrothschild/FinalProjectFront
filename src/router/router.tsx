import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "./ROUTES";
import Layout from "../layout/Layout";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			{ROUTES.map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Route>,
	),
);
