import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";

const UserManagementPage = () => {
	const isAdmin = useSelector((state: RootState) => state.user.isAdmin);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		useUsers().then((data) => {
			setUsers(data.users);
		});
	}, []);
	console.log(isAdmin);
	if (!isAdmin) return <Navigate to="/movies" />;
	return !users.length ? (
		<div>Loading...</div>
	) : (
		<div>
			<h1>User Management Page</h1>
		</div>
	);
};

export default UserManagementPage;
