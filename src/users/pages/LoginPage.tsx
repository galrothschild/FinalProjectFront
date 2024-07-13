import type { FieldValues } from "react-hook-form";
import Form from "../../forms/components/Form";
import { login } from "../utils/usersApi.service";
import { setUser } from "../../redux/user/userSlice";
import type { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";

const loginSchema = z.object({
	username: z.string().min(6),
	password: z.string().min(8),
});
type LoginFormInputs = z.infer<typeof loginSchema>;
const Login: React.FC = () => {
	const [error, setError] = useState("");
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const inputs = ["username", "password"];
	const submit = {
		name: "Login",
		action: async (data: LoginFormInputs) => {
			try {
				const user = await login(data);
				dispatch(setUser(user));
				navigate("/");
			} catch (error) {
				const { response } = error as {
					response: { status: number; data: string };
				};
				if (response.status >= 400) {
					setError(response.data);
				}
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
