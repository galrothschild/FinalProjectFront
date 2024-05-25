import { Navbar, Tabs } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
	const navigate = useNavigate();
	return (
		<Tabs aria-label="Default tabs" style="default">
			<Tabs.Item
				active
				title="Home"
				icon={HiHome}
				onClick={() => navigate("/")}
			>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Profile tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the
				next. The tab JavaScript swaps classes to control the content visibility
				and styling.
			</Tabs.Item>
			<Tabs.Item title="Services" onClick={() => navigate("/services")}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Dashboard tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the
				next. The tab JavaScript swaps classes to control the content visibility
				and styling.
			</Tabs.Item>
			<Tabs.Item title="Settings">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Settings tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the
				next. The tab JavaScript swaps classes to control the content visibility
				and styling.
			</Tabs.Item>
			<Tabs.Item title="Contacts">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Contacts tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the
				next. The tab JavaScript swaps classes to control the content visibility
				and styling.
			</Tabs.Item>
			<Tabs.Item disabled title="Disabled">
				Disabled content
			</Tabs.Item>
		</Tabs>
	);
};

export default NavbarComponent;
