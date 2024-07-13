import React from "react";
import { useToast } from "../toast/hooks/useToast";
import { Button } from "flowbite-react";

const Sandbox = () => {
	const invokeToast = useToast();
	return (
		<Button onClick={() => invokeToast("Hello from the sandbox!", "success")}>
			Toast!
		</Button>
	);
};

export default Sandbox;
