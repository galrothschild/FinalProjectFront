import type { FieldValues } from "react-hook-form";
import Form from "../../forms/components/Form";
import { login } from "../utils/usersApi.service";
import { setUser } from "../../redux/user/userSlice";
import type { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs extends FieldValues {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const inputs = ["username", "password"];
	const submit = {
		name: "Login",
		action: async (data: LoginFormInputs) => {
			const user = await login(data);
			dispatch(setUser(user));
			navigate("/");
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
			inputs={inputs}
			submit={submit}
			showResetAndCancel={showResetAndCancel}
			callToAction={callToAction}
		/>
	);
};

export default Login;
