import { useLocation } from "react-router-dom";

const App = () => {
	const location = useLocation();

	return (
		<>
			<h1 className="text-4xl text-white">{location.pathname}</h1>
		</>
	);
};

export default App;
