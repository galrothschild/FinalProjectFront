import { memo } from "react";
import Header from "./header/Header";
import { Flowbite } from "flowbite-react";

type LayoutType = {
	children?: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
	return (
		<Flowbite>
			<Header />
			<div className="flex mx-28 my-3 flex-col justify-center items-center">
			{children}
			</div>
		</Flowbite>
	);
};

export default memo(Layout);
