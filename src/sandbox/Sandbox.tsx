import { useToast } from "../toast/hooks/useToast";
import { Button } from "flowbite-react";
import { getUsersWatchList } from "../users/utils/usersApi.service";

const Sandbox = () => {
	const invokeToast = useToast();
	const handleWatchlist = async () => {
		const response = await getUsersWatchList();
		console.log(response);
	};
	return (
		<div className="flex flex-col gap-5">
			<Button onClick={() => invokeToast("Hello from the sandbox!", "success")}>
				Toast!
			</Button>
			<Button onClick={handleWatchlist}>Watchlist!</Button>
		</div>
	);
};

export default Sandbox;
