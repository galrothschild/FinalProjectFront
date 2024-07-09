import { memo, useEffect } from "react";
import Header from "./header/Header";
import { Flowbite } from "flowbite-react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/user/userSlice";
import { getNewAccessToken } from "../users/utils/usersApi.service";

const Layout: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const initializeAuth = async () => {
			const accessToken = await getNewAccessToken();
			if (accessToken) {
				dispatch(setToken(accessToken));
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
		</Flowbite>
	);
};

export default memo(Layout);
