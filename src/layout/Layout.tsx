import { memo, useEffect } from "react";
import Header from "./header/Header";
import { Flowbite } from "flowbite-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/user/userSlice";
import { getNewAccessToken } from "../users/utils/usersApi.service";
import ToastStack from "../toast/ToastStack";
import FooterComponent from "./Footer";

const Layout: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
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
			<div className="flex px-5 py-3 flex-col justify-center items-center sm:px-28 min-h-[75dvh]">
				<Outlet />
			</div>
			<ToastStack position="top-right" />
			<FooterComponent />
		</Flowbite>
	);
};

export default memo(Layout);
