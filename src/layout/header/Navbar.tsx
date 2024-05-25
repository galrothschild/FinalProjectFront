import { Navbar, Tabs } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";
import { IconUser } from "@tabler/icons-react";

const NavbarComponent = () => {
	return (
		<Tabs aria-label="Default tabs" style="default">
			<Tabs.Item active title="Profile">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Profile tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the
				next. The tab JavaScript swaps classes to control the content visibility
				and styling.
			</Tabs.Item>
			<Tabs.Item title="Dashboard">
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
