import { memo } from "react";
import Header from "./header/Header";
import { Flowbite } from "flowbite-react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
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
