"use client";

import React, { useContext, useEffect, useState } from "react";
import CustomInput from "../components/custom/CustomInput";
import DropZoneInput from "../components/custom/DropZoneInput";
import CustomButtom from "../components/custom/CustomButtom";
import { SubmitHandler, useForm } from "react-hook-form";
import { makeRequest } from "../utils/axios";
import { ModalContext } from "../context/ModalProvider";

interface FormFields {
	name: string;
	surname: string;
	email: string;
	phone: string;
	avatar: File | null;
}

const page = () => {
	const { handleCloseAddAgentModal } = useContext(ModalContext);

	const [avatar, setAvatar] = useState<File | null>(null);

	const { register, handleSubmit, watch, setValue } = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const formData = new FormData();
		if (avatar) {
			formData.append("name", data.name);
			formData.append("surname", data.surname);
			formData.append("email", data.email);
			formData.append("phone", data.phone);
			formData.append("avatar", avatar);
		}

		try {
			await makeRequest.post("/agents", formData);
			sessionStorage.removeItem("agentForm");
			handleCloseAddAgentModal();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const savedForm = JSON.parse(
			sessionStorage.getItem("agentForm") || "{}"
		);

		Object.keys(savedForm).forEach((field) => {
			setValue(field as keyof FormFields, savedForm[field]);
		});
	}, [setValue]);

	const watchAllFields = watch();
	useEffect(() => {
		sessionStorage.setItem("agentForm", JSON.stringify(watchAllFields));
	}, [watchAllFields]);

	const handleFileChange = (file: File) => {
		setAvatar(file);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<CustomInput
				header="სახელი"
				label="ჩაწერეთ სახელი"
				register={register("name")}
			/>
			<CustomInput
				header="გვარი"
				label="ჩაწერეთ გვარი"
				register={register("surname")}
			/>
			<CustomInput
				header="ელ ფოსტა"
				label="ჩაწერეთ ელ ფოსტა"
				register={register("email")}
			/>
			<CustomInput
				header="ტელეფონის ნომერი"
				label="ჩაწერეთ ტელეფონის ნომერი"
				register={register("phone")}
			/>
			<DropZoneInput header="ატვირთეთ ფოტო" />
			<CustomButtom title={"დაამატე ლისტინგი"} fill type="submit" />
		</form>
	);
};

export default page;
