import { Label, TextInput } from "flowbite-react";
import capitalizeString from "../../utils/capitalizeWord";
import type {
	FieldErrors,
	FieldValues,
	UseFormRegister,
	Path,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
	errors: FieldErrors<T>;
	register: UseFormRegister<T>;
	inputName: Path<T>;
	wrap?: boolean;
};

const FormInput = <T extends FieldValues>({
	errors,
	register,
	inputName,
	wrap,
}: FormInputProps<T>) => {
	const error = errors[inputName]?.message || "";
	return (
		<div className={wrap ? "md:w-5/12" : ""}>
			<Label htmlFor={inputName}>{capitalizeString(inputName)}</Label>
			<TextInput
				id={inputName}
				type={inputName === "password" ? "password" : "text"}
				placeholder={`Enter your ${inputName}`}
				{...register(inputName, { required: `${inputName} is required` })}
				color={errors[inputName] ? "failure" : "default"}
			/>
			{errors[inputName] && <p className="text-red-500">{String(error)}</p>}
		</div>
	);
};

export default FormInput;
