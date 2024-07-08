import Form from "../../forms/components/Form";
import type { FieldValues } from "react-hook-form";

interface SignupFormInputs extends FieldValues {
	username: string;
	email: string;
	password: string;
	image: string;
	firstName: string;
	lastName: string;
	middleName: string;
	age: number;
}

const SignupPage: React.FC = () => {
	const inputs = [
		"username",
		"email",
		"password",
		"image",
		"firstName",
		"lastName",
		"middleName",
		"age",
	];
	const submit = {
		name: "Sign up",
		action: (data: SignupFormInputs) => console.log(data),
	};
	const showResetAndCancel = false;
	const callToAction = {
		show: true,
		text: "Already have an account? Login",
		link: "/login",
	};
	return (
		<Form<SignupFormInputs>
			inputs={inputs}
			submit={submit}
			showResetAndCancel={showResetAndCancel}
			callToAction={callToAction}
		/>
	);
};

export default SignupPage;
