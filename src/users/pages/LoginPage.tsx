import Form from "../../forms/components/Form";
import { login } from "../utils/usersApi.service";
import { setUser } from "../../redux/user/userSlice";
import type { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "../../toast/hooks/useToast";

const loginSchema = z.object({
	username: z.string().min(3),
	password: z
		.string()
		.regex(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			"At least One Capital, one lowercase and one number",
		),
});
type LoginFormInputs = z.infer<typeof loginSchema>;
const Login: React.FC = () => {
	const invokeToast = useToast();
	const [error, setError] = useState("");
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const inputs = ["username", "password"];
	const submit = {
		name: "Login",
		action: async (data: LoginFormInputs) => {
			try {
				const user = await login(data);
				console.log(user);
				dispatch(setUser(user));
				invokeToast("Welcome back!", "success");
				navigate("/");
			} catch (error) {
				const errorMessage = (error as { data: { error: string } })?.data.error;
				setError(errorMessage);
				invokeToast("Invalid credentials", "error");
			}
		},
	};
	const showResetAndCancel = false;
	const callToAction = {
		show: true,
		text: "New user? Register",
		link: "/signup",
	};

	return (
		<Form<LoginFormInputs>
			schema={loginSchema}
			inputs={inputs}
			submit={submit}
			showResetAndCancel={showResetAndCancel}
			callToAction={callToAction}
			error={error}
		/>
	);
};

export default Login;
