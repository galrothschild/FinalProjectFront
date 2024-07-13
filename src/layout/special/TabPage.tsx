import { Tabs } from "flowbite-react";
import type { IconType } from "react-icons";

type TabPageProps = {
	tabs: { title: string; content: JSX.Element; icon?: IconType }[];
};

const TabPage: React.FC<TabPageProps> = ({ tabs }) => {
	return (
		<Tabs aria-label="Tabs">
			{tabs.map((tab, index) => (
				<Tabs.Item
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					title={tab.title}
					icon={tab.icon}
				>
					{tab.content}
				</Tabs.Item>
			))}
		</Tabs>
	);
};

export default TabPage;
