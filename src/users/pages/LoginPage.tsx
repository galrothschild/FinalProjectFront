import type { FieldValues } from "react-hook-form";
import Form from "../../forms/components/Form";

interface LoginFormInputs extends FieldValues {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const inputs = ["username", "password"];
	const submit = {
		name: "Login",
		action: (data: LoginFormInputs) => console.log(data),
	};
	const showResetAndCancel = false;
	const callToAction = {
		show: true,
		text: "New user? Register",
		link: "/signup",
	};
	return (
		<Form<LoginFormInputs>
			inputs={inputs}
			submit={submit}
			showResetAndCancel={showResetAndCancel}
			callToAction={callToAction}
		/>
	);
};

export default Login;
