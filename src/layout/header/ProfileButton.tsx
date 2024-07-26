import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { Dropdown, Avatar } from "flowbite-react";
import { logoutAPI } from "../../users/utils/usersApi.service";
import { logout } from "../../redux/user/userSlice";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import { useToast } from "../../toast/hooks/useToast";

const ProfileButton = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const isLoggedIn = useSelector((state: RootState) => state.user.isLogged);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const invokeToast = useToast();

	const handleLogout = () => {
		logoutAPI();
		dispatch(logout());
		navigate("/login");
		invokeToast("See you next time", "info");
	};

	return isLoggedIn ? (
		<div className="flex md:order-2">
			<Dropdown
				arrowIcon={false}
				inline
				label={<Avatar alt="User settings" img={user.image} rounded />}
			>
				<Dropdown.Header>
					<span className="block text-sm">{`${user.name.first} ${user.name.last}`}</span>
					<span className="block truncate text-sm font-medium">
						{user.email}
					</span>
				</Dropdown.Header>
				<Dropdown.Item onClick={() => navigate(`/users/${user._id}`)}>
					Update User
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
			</Dropdown>
		</div>
	) : null;
};

export default ProfileButton;
