import { FloatingLabel, Label, TextInput, Tooltip } from "flowbite-react";
import capitalizeString from "../../utils/capitalizeWord";
import type {
	FieldValues,
	UseFormRegister,
	Path,
	FieldError,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
	error: FieldError;
	register: UseFormRegister<T>;
	inputName: Path<T>;
	wrap?: boolean;
};

const FormInput = <T extends FieldValues>({
	error,
	register,
	inputName,
}: FormInputProps<T>) => {
	const message = error?.message || "";
	let inputType = "text";
	switch (true) {
		case inputName.toLowerCase().includes("password"):
			inputType = "password";
			break;
		case inputName.toLowerCase().includes("email"):
			inputType = "email";
			break;
		default:
			break;
	}
	return (
		<div>
			<FloatingLabel
				variant="filled"
				id={inputName}
				type={inputType}
				className="w-full"
				// placeholder={`Enter your ${inputName}`}
				{...register(inputName)}
				color={error ? "error" : "default"}
				label={capitalizeString(inputName)}
			/>
			<p className="text-red-500">{message ?? " "}</p>
			{/* <TextInput
				id={inputName}
				type={inputName === "password" ? "password" : "text"}
				placeholder={`Enter your ${inputName}`}
				{...register(inputName)}
				color={errors[inputName] ? "failure" : "default"}
			/> */}
		</div>
	);
};

export default FormInput;
