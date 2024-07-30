import { memo, useEffect } from "react";
import Header from "./header/Header";
import { Flowbite, useThemeMode } from "flowbite-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/user/userSlice";
import { getNewAccessToken } from "../users/utils/usersApi.service";
import FooterComponent from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import capitalizeString from "../utils/capitalizeWord";

const Layout: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { mode } = useThemeMode();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const initializeAuth = async () => {
			try {
				if (["/login", "/signup"].includes(pathname)) return;
				const userData = await getNewAccessToken();
				if (userData) {
					dispatch(setToken(userData.accessToken));
					dispatch(setUser(userData.user));
				}
			} catch (error) {
				if (["/login", "/signup", "/about"].includes(pathname)) return;
				console.log(error);
				navigate("/login");
			}
		};
		initializeAuth();
	}, [dispatch, navigate]);
	return (
		<Flowbite>
			<Header />
			<h1 className="text-3xl font-bold text-center dark:text-white mt-5">
				{`${capitalizeString(pathname.split("/")[1] || "Home")} Page`}
			</h1>
			<div className="flex px-5 py-3 flex-col justify-center items-center sm:px-28 min-h-[69dvh]">
				<Outlet />
			</div>
			<ToastContainer
				theme={mode === "auto" ? "colored" : mode}
				className="mt-10"
			/>
			<FooterComponent />
		</Flowbite>
	);
};

export default memo(Layout);
