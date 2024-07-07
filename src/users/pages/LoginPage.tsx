import { useForm, type SubmitHandler } from "react-hook-form";
import { Label, TextInput, Button, Card } from "flowbite-react";

interface LoginFormInputs {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>();

	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		console.log(data);
		// Handle login logic here
	};

	return (
		<div className="flex justify-center items-center min-h-fit">
			<Card className="w-full max-w-md">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<Label htmlFor="username">Username</Label>
						<TextInput
							id="username"
							type="text"
							placeholder="Enter your username"
							{...register("username", { required: "Username is required" })}
							color={errors.username ? "failure" : "default"}
						/>
						{errors.username && (
							<p className="text-red-500">{errors.username.message}</p>
						)}
					</div>
					<div className="mb-4">
						<Label htmlFor="password">Password</Label>
						<TextInput
							id="password"
							type="password"
							placeholder="Enter your password"
							{...register("password", { required: "Password is required" })}
							color={errors.password ? "failure" : "default"}
						/>
						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</div>
					<Button type="submit">Login</Button>
					<p className="dark:text-gray-100">
						Don't have a user yet? <a href="/signup">Click here</a> to sign up
					</p>
				</form>
			</Card>
		</div>
	);
};

export default Login;
