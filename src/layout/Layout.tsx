import { memo, useEffect } from "react";
import Header from "./header/Header";
import { Flowbite } from "flowbite-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/user/userSlice";
import { getNewAccessToken, getUser } from "../users/utils/usersApi.service";
import ToastStack from "../toast/ToastStack";

const Layout: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		const initializeAuth = async () => {
			try {
				const userData = await getNewAccessToken();
				if (userData) {
					dispatch(setToken(userData.accessToken));
					dispatch(setUser(userData.user));
				}
			} catch (error) {
				console.log(error);
			}
		};
		initializeAuth();
	}, [dispatch]);
	return (
		<Flowbite>
			<Header />
			<div className="flex px-5 py-3 flex-col justify-center items-center sm:px-28">
				<Outlet />
			</div>
			<ToastStack position="top-right" />
		</Flowbite>
	);
};

export default memo(Layout);
