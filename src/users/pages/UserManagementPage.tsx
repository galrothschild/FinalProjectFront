import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";

const UserManagementPage = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		console.log(users);
	}, [users]);
	return (
		<div>
			<h1>User Management Page</h1>
		</div>
	);
};

export default UserManagementPage;
