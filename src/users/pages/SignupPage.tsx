import { useState } from "react";
import Form from "../../forms/components/Form";
import { login, register } from "../utils/usersApi.service";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

const signupSchema = z.object({
	username: z.string().min(3),
	email: z.string().email(),
	password: z
		.string()
		.regex(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			"At least One Capital, one lowercase and one number",
		),
	"confirm password": z
		.string()
		.regex(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			"At least One Capital, one lowercase and one number",
		),
	image: z
		.string()
		.url()
		.default("https://picsum.photos/300/200")
		.or(z.literal("")),
	"first name": z.string().min(2),
	"middle name": z.string().optional(),
	"last name": z.string().min(2),
});
type SignupFormInputs = z.infer<typeof signupSchema>;

const inputs: string[] = Object.keys(signupSchema.shape);
const schema = signupSchema.refine(
	(data) => data.password === data["confirm password"],
	{
		message: "Passwords do not match",
		path: ["confirm password"],
	},
);
const SignupPage: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [error, setError] = useState("");
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
			register(user).then((response) => {
				if (response.status >= 400) {
					setError(response.data);
				}
				if (response.username) {
					setError("");
					login({ username: data.username, password: data.password });
					dispatch(setUser(response));
					navigate("/");
				}
			});
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
			error={error}
		/>
	);
};

export default SignupPage;
