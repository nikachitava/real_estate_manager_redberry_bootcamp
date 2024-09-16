import React, { useContext } from "react";
import CustomInput from "./CustomInput";
import DropZoneInput from "./DropZoneInput";
import CustomButtom from "./CustomButtom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { addAgentFormSchema } from "@/app/FormSchemas/AddAgentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeRequest } from "@/app/utils/axios";

interface IAddAgentModalProps {
	onClose?: () => void;
}

type FormFields = z.infer<typeof addAgentFormSchema>;

const AddAgentModal: React.FC<IAddAgentModalProps> = ({ onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields },
	} = useForm<FormFields>({
		resolver: zodResolver(addAgentFormSchema),
		mode: "onChange",
	});

	const getInputStyle = (fieldName: keyof FormFields) => {
		return errors[fieldName]
			? "error"
			: touchedFields[fieldName]
			? "success"
			: "default";
	};

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const formData = new FormData();

		try {
			formData.append("name", data.name);
			formData.append("surname", data.surname);
			formData.append("email", data.email);
			formData.append("phone", data.phone);
			if (data.avatar.length > 0) {
				formData.append("avatar", data.avatar[0]);
			}
			await makeRequest.post("/agents", formData);
		} catch (error) {
			console.log(error);
		}
		console.log(formData);
	};

	return (
		<form
			className="min-w-[1009px] p-[105px]"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="medium-text text-[32px] text-center mb-[61px]">
				აგენტის დამატება
			</h1>
			<div className="flex flex-col gap-7">
				<div className="grid grid-cols-2 gap-[31px]">
					<CustomInput
						header={"სახელი*"}
						label={
							errors.name
								? errors.name.message
								: "მინიმუმ ორი სიმბოლო"
						}
						register={register("name")}
						style={getInputStyle("name")}
					/>
					<CustomInput
						header={"გვარი"}
						label={
							errors.surname
								? errors.surname.message
								: "მინიმუმ ორი სიმბოლო"
						}
						register={register("surname")}
						style={getInputStyle("surname")}
					/>
				</div>
				<div className="grid grid-cols-2 gap-[31px]">
					<CustomInput
						header={"ელ ფოსტა*"}
						label={
							errors.email
								? errors.email.message
								: "გამოიყენეთ @redberry.ge ფოსტა"
						}
						register={register("email")}
						style={getInputStyle("email")}
					/>
					<CustomInput
						header={"ტელეფონის ნომერი"}
						label={
							errors.phone
								? errors.phone.message
								: "მხოლოდ რიცხვები"
						}
						register={register("phone")}
						style={getInputStyle("phone")}
					/>
				</div>
				<DropZoneInput
					header={"ატვირთეთ ფოტო*"}
					// onFileChange={handleFileChange}
					register={register("avatar")}
					style={getInputStyle("avatar")}
				/>
				<div className="flex items-center justify-end gap-2 mt-[66px]">
					<CustomButtom
						title={"გაუქმება"}
						fill={false}
						onClick={onClose}
					/>
					<CustomButtom title={"დაამატე აგენტი"} fill type="submit" />
				</div>
			</div>
		</form>
	);
};

export default AddAgentModal;
