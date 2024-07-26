import { FloatingLabel } from "flowbite-react";
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
	isRequired?: boolean;
};

const FormInput = <T extends FieldValues>({
	error,
	register,
	inputName,
	isRequired,
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
				label={`${capitalizeString(inputName)}${isRequired ? "*" : ""}`}
			/>
			<p className="text-red-500 h-5">{message ?? " "}</p>
		</div>
	);
};

export default FormInput;
