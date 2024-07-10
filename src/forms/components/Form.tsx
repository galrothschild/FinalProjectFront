import {
	type FieldValues,
	useForm,
	type SubmitHandler,
	type Path,
} from "react-hook-form";
import { Button, Card } from "flowbite-react";
import FormInput from "../../forms/components/FormInput";
import { z, type ZodObject, type ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormProps<T extends FieldValues> = {
	submit: { name: string; action: (data: T) => void };
	showResetAndCancel: boolean;
	callToAction: { show: boolean; text: string; link: string };
	schema: ZodSchema | ZodObject<T>;
	inputs: string[];
};

const Form = <T extends FieldValues>({
	showResetAndCancel,
	submit,
	callToAction,
	schema,
	inputs,
}: FormProps<T>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<T>({
		mode: "all",
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<T> = (data) => {
		submit.action(data);
	};

	return (
		<Card className={`w-full max-w-md ${inputs.length > 4 ? "max-w-4xl" : ""}`}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`flex flex-col gap-3 ${
					inputs.length > 4 ? "md:flex-wrap md:flex-row md:justify-center" : ""
				}`}
			>
				{inputs.map((input) => (
					<FormInput
						key={input}
						wrap={inputs.length > 4}
						errors={errors}
						inputName={input as Path<T>}
						register={register}
					/>
				))}
				<Button
					type="submit"
					className={`w-full ${inputs.length > 4 ? "md:w-5/6" : ""} `}
				>
					{submit.name}
				</Button>
				{showResetAndCancel && (
					<div className="flex gap-3">
						<Button type="reset" className="w-full" color="warning">
							Reset
						</Button>
						<Button type="button" className="w-full" color="danger">
							Cancel
						</Button>
					</div>
				)}
				{callToAction.show && (
					<p className="dark:text-gray-100 mt-3">
						{callToAction.text}{" "}
						<a href={callToAction.link} className="underline text-gray-400">
							here
						</a>{" "}
					</p>
				)}
			</form>
		</Card>
	);
};

export default Form;
