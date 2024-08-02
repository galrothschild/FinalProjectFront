import { useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";

type UserEntryProps = {
	user: {
		_id: string;
		name: {
			first: string;
			middle?: string;
			last: string;
		};
		email: string;
		image: string;
		isAdmin: boolean;
	};
	onDelete: (id: string) => void;
};

const UserEntry: React.FC<UserEntryProps> = ({ user, onDelete }) => {
	const navigate = useNavigate();

	const handleUpdate = () => {
		navigate(`/users/${user._id}`);
	};

	const handleDelete = () => {
		if (
			window.confirm(
				`Are you sure you want to delete ${user.name.first} ${user.name.last}?`,
			)
		) {
			onDelete(user._id);
		}
	};

	return (
		<Card key={user._id} className="max-w-[90vw] dark:text-white">
			<div className="flex items-center">
				<img
					className="w-24 h-24 rounded-full mx-auto"
					src={user.image}
					alt={`${user.name.first} ${user.name.middle ?? ""} ${user.name.last}`}
				/>
				<div className="ml-4">
					<div className="text-3xl font-medium text-black dark:text-white">
						{`${user.name.first} ${user.name.middle ?? ""} ${user.name.last}`}
					</div>
					<div className="font-light text-md text-gray-400">{user.email}</div>
					<div className="font-normal text-lg">
						{user.isAdmin ? "Admin" : "Normal User"}
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-4 space-x-4">
				<Button onClick={handleUpdate}>Update User</Button>
				<Button onClick={handleDelete} color="failure">
					Delete User
				</Button>
			</div>
		</Card>
	);
};

export default UserEntry;
