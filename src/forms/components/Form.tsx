import {
	type FieldValues,
	useForm,
	type SubmitHandler,
	type Path,
	type FieldError,
} from "react-hook-form";
import { Button, Card } from "flowbite-react";
import FormInput from "../../forms/components/FormInput";
import type { ZodObject, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type FormProps<T extends FieldValues> = {
	submit: { name: string; action: (data: T) => void };
	showResetAndCancel: boolean;
	callToAction: { show: boolean; text: string; link: string };
	schema: ZodSchema | ZodObject<T>;
	inputs: string[];
	error: string;
	defaultValues?: T;
};

const Form = <T extends FieldValues>({
	showResetAndCancel,
	submit,
	callToAction,
	schema,
	inputs,
	error,
	defaultValues,
}: FormProps<T>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<T>({
		mode: "all",
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<T> = (data) => {
		submit.action(data);
	};

	const gridTemplateRows = `repeat(${Math.ceil(inputs.length / 2)}, minmax(0, 1fr))`;

	const navigate = useNavigate();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		defaultValues && reset(defaultValues);
	}, [defaultValues]);
	return (
		<Card className={`w-full max-w-md ${inputs.length > 4 ? "max-w-4xl" : ""}`}>
			<h1 className="text-2xl font-bold dark:text-gray-100 text-center">
				{submit.name}
			</h1>
			<p className="text-center h-5 text-red-500">{error}</p>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
				<style>
					{inputs.length > 4 &&
						`
						.grid-template-rows {
							grid-template-rows: repeat(${inputs.length}, minmax(0, 1fr));
					}
						@media (min-width: 768px) {
							.grid-template-rows {
								grid-template-rows: ${gridTemplateRows};
							}
						}
					`}
				</style>
				<div
					className={`grid grid-flow-row grid-cols-1 gap-3 ${
						inputs.length > 4
							? "md:grid-cols-2 md:grid-flow-col grid-template-rows"
							: ""
					}`}
				>
					{inputs.map((input) => (
						<FormInput<T>
							key={input}
							wrap={inputs.length > 4}
							error={errors[input] as FieldError}
							inputName={input as Path<T>}
							register={register}
						/>
					))}
				</div>
				<Button type="submit" className={"w-full"}>
					{submit.name}
				</Button>
				{showResetAndCancel && (
					<div className="flex gap-3">
						<Button
							type="button"
							onClick={() => reset(defaultValues)}
							className="w-full"
							color="warning"
						>
							Reset
						</Button>
						<Button
							type="button"
							className="w-full"
							color="failure"
							onClick={() => navigate(-1)}
						>
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
