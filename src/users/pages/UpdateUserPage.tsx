import { Navigate, useNavigate, useParams } from "react-router-dom";
import Form from "../../forms/components/Form";
import useUpdateUser, {
	type UpdateUserFormInputs,
} from "../hooks/useUpdateUser";

const UpdateUserPage: React.FC = () => {
	const { id } = useParams();
	if (!id) {
		return <Navigate to="/" />;
	}
	const {
		inputs,
		UpdateUserSchema,
		submit,
		showResetAndCancel,
		callToAction,
		error,
		defaultValues,
	} = useUpdateUser(id);
	return (
		<Form<UpdateUserFormInputs>
			inputs={inputs}
			schema={UpdateUserSchema}
			submit={submit}
			showResetAndCancel={showResetAndCancel}
			callToAction={callToAction}
			error={error}
			defaultValues={defaultValues}
		/>
	);
};

export default UpdateUserPage;
