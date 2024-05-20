import { memo } from "react";
import Header from "./header/Header";

type LayoutType = {
	children?: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default memo(Layout);
