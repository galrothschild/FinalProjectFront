import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Dropdown, Avatar, Navbar } from "flowbite-react";

const ProfileButton = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const isLoggedIn = useSelector((state: RootState) => state.user.isLogged);

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
				<Dropdown.Item>Dashboard</Dropdown.Item>
				<Dropdown.Item>Settings</Dropdown.Item>
				<Dropdown.Item>Earnings</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item>Sign out</Dropdown.Item>
			</Dropdown>
		</div>
	) : null;
};

export default ProfileButton;
