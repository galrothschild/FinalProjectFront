import { getUsers } from "../utils/usersApi.service";

const useUsers = async () => {
	try {
		const users = await getUsers();
		return {
			users,
		};
	} catch (error) {
		return { users: [] };
	}
};

export default useUsers;
