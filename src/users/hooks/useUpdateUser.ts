import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { setUser } from "../../redux/user/userSlice";
import { getUser, updateUser } from "../utils/usersApi.service";
const UpdateUserSchema = z.object({
	username: z.string().min(6),
	email: z.string().email(),
	image: z.string().url().or(z.literal("")),
	"first name": z.string().min(2),
	"middle name": z.string().optional(),
	"last name": z.string().min(2),
});
export type UpdateUserFormInputs = z.infer<typeof UpdateUserSchema>;
const useUpdateUser = (id: string) => {
	const [defaultValues, setDefaultValues] = useState<UpdateUserFormInputs>();
	useEffect(() => {
		getUser(id).then((userData) => {
			const {
				name: { first, middle, last },
				...rest
			} = userData;
			setDefaultValues({
				"first name": first,
				"middle name": middle || "",
				"last name": last,
				...rest,
			});
		});
	}, [id]);
	const inputs: string[] = Object.keys(UpdateUserSchema.shape);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const submit = {
		name: "Update User",
		action: (data: UpdateUserFormInputs) => {
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
			updateUser(user, id).then((response) => {
				if (response.status >= 400) {
					setError(response.data);
				}
				if (response.username) {
					setError("");
					dispatch(setUser(response));
					navigate("/");
				}
			});
		},
	};
	const showResetAndCancel = true;
	const callToAction = {
		show: false,
		text: "",
		link: "",
	};

	return {
		inputs,
		UpdateUserSchema,
		submit,
		showResetAndCancel,
		callToAction,
		error,
		defaultValues,
	};
};

export default useUpdateUser;