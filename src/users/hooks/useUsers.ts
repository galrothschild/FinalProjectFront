import { getUsers } from "../utils/usersApi.service";

const useUsers = async () => {
	const users = await getUsers();

	return {
		users,
	};
};

export default useUsers;
