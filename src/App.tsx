import { useLocation } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
	const location = useLocation();
	return (
		<Layout>
			<h1>{location.pathname}</h1>
		</Layout>
	);
};

export default App;
