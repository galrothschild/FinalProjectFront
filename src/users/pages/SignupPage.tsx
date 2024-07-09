import Form from "../../forms/components/Form";
import type { FieldValues } from "react-hook-form";

interface SignupFormInputs extends FieldValues {
	username: string;
	email: string;
	password: string;
	image: string;
	"first name": string;
	"last name": string;
	"middle name": string;
	age: number;
}

const SignupPage: React.FC = () => {
	const inputs = [
		"username",
		"email",
		"password",
		"image",
		"first name",
		"middle name",
		"last name",
		"age",
	];
	const submit = {
		name: "Sign up",
		action: (data: SignupFormInputs) => {
			const user = {
				name: {
					first: data["first name"],
					middle: data["middle name"],
					last: data["last name"],
				},
			};
		},
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
