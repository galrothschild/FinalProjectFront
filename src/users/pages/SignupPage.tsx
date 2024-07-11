import Form from "../../forms/components/Form";
import { register } from "../utils/usersApi.service";
import { z } from "zod";

const signupSchema = z.object({
	username: z.string().min(6),
	email: z.string().email(),
	password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
	confirmPassword: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
	image: z.string().url().default("https://picsum.photos/300/200"),
	"first name": z.string().min(2),
	"middle name": z.string().optional(),
	"last name": z.string().min(2),
	age: z.number(),
});

// interface SignupFormInputs extends FieldValues {
// 	username: string;
// 	email: string;
// 	password: string;
// 	image: string;
// 	"first name": string;
// 	"last name": string;
// 	"middle name": string;
// 	age: number;
// }
type SignupFormInputs = z.infer<typeof signupSchema>;

const inputs: string[] = Object.keys(signupSchema.shape);
console.log(inputs);
const schema = signupSchema.superRefine(
	({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords did not match",
				path: ["confirmPassword"],
			});
		}
	},
);
const SignupPage: React.FC = () => {
	const submit = {
		name: "Sign up",
		action: (data: SignupFormInputs) => {
			const {
				"first name": firstName,
				"middle name": middleName,
				"last name": lastName,
				...rest
			} = data;

			const user = {
				name: {
					first: firstName,
					middle: middleName,
					last: lastName,
				},
				...rest,
				image: rest.image || "https://picsum.photos/300/200",
			};
			register(user).then((response) => console.log(response));
		},
	};
	const showResetAndCancel = true;
	const callToAction = {
		show: true,
		text: "Already have an account? Login",
		link: "/login",
	};
	return (
		<Form<SignupFormInputs>
			inputs={inputs}
			schema={schema}
			submit={submit}
			showResetAndCancel={showResetAndCancel}
			callToAction={callToAction}
		/>
	);
};

export default SignupPage;
