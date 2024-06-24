import { useLocation } from "react-router-dom";

const App = () => {
	const location = useLocation();
	return (
		<>
			<h1>{location.pathname}</h1>
		</>
	);
};

export default App;
