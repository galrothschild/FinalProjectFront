import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import type { IUser } from "../data/User.model";
import CardComponent from "../../cards/components/Card";
import UserEntry from "../components/UserEntry";
import { deleteUser } from "../utils/usersApi.service";
import { useToast } from "../../toast/hooks/useToast";

const UserManagementPage = () => {
	const isAdmin = useSelector((state: RootState) => state.user.isAdmin);
	const [users, setUsers] = useState<IUser[]>([]);
	const invokeToast = useToast();
	const handleDelete = (id: string) => {
		deleteUser(id)
			.then(() => {
				setUsers((prev) => prev.filter((user) => user._id !== id));
				invokeToast("User deleted successfully", "success");
			})
			.catch((error) => invokeToast(error.message, "error"));
	};
	useEffect(() => {
		useUsers().then((data) => {
			setUsers(data.users);
		});
	}, []);
	if (!isAdmin) return <Navigate to="/movies" />;
	return !users.length ? (
		<div>Loading...</div>
	) : (
		<div className="flex flex-col gap-4">
			{users.map((user) => (
				<UserEntry
					key={user._id}
					user={user}
					onDelete={() => handleDelete(user._id || "")}
				/>
			))}
		</div>
	);
};

export default UserManagementPage;
