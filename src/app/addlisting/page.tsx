"use client";

import React, { useEffect, useState } from "react";
import CustomInput from "../components/custom/CustomInput";
import CustomButtom from "../components/custom/CustomButtom";
import CustomdropDown from "../components/custom/CustomdropDown";
import DropZoneInput from "../components/custom/DropZoneInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { makeRequest } from "../utils/axios";
import { AddListingFormSchema } from "../FormSchemas/AddListingFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextArea from "../components/custom/CustomTextArea";

type FormFields = z.infer<typeof AddListingFormSchema> & {
	image: File | null;
};

type TypeRegions = {
	id: number;
	name: string;
};

type TypeCities = TypeRegions & {
	region_id: number;
};

type TypeAgents = {
	id: number;
	name: string;
	surname: string;
	image: string;
};

const page = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, touchedFields },
	} = useForm<FormFields>({
		resolver: zodResolver(AddListingFormSchema),
		mode: "onChange",
	});
	const [regions, setRegions] = useState<TypeRegions[]>([]);
	const [cities, setCities] = useState<TypeCities[]>([]);
	const [agents, setAgents] = useState<TypeAgents[]>([]);
	const [imageFile, setImageFile] = useState<File | null>(null);

	const fetchRegions = async () => {
		try {
			const response = await makeRequest.get("/regions");
			setRegions(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchCities = async () => {
		try {
			const response = await makeRequest.get("/cities");
			setCities(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchAgents = async () => {
		try {
			const response = await makeRequest.get("/agents");
			setAgents(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchRegions();
		fetchCities();
		fetchAgents();
	}, []);

	const selectedRegion = watch("region_id");
	const selectedCity = watch("city_id");
	const selectedAgent = watch("agent_id");

	const filteredCities = cities.filter(
		(city) => city.region_id === selectedRegion
	);

	const getInputStyle = (fieldName: keyof FormFields) => {
		return errors[fieldName]
			? "error"
			: touchedFields[fieldName]
			? "success"
			: "default";
	};

	const MAX_FILE_SIZE_MB = 1;
	const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

	const handleFileChange = (file: File) => {
		if (file.size > MAX_FILE_SIZE_BYTES) {
			return;
		}
		setImageFile(file);
	};

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const formData = new FormData();
		formData.append("is_rental", data.is_rental.toString());
		formData.append("address", data.address);
		formData.append("zip_code", data.zip_code.toString());
		formData.append("region_id", data.region_id.toString());
		formData.append("city_id", data.city_id.toString());
		formData.append("price", data.price.toString());
		formData.append("area", data.area.toString());
		formData.append("bedrooms", data.bedrooms.toString());
		formData.append("description", data.description);
		if (imageFile) {
			formData.append("image", imageFile);
		}
		formData.append("agent_id", data.agent_id.toString());

		try {
			await makeRequest.post("/real-estates", formData).then(() => {
				/* here must be redirect to created estate */
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<h1 className="text-center text-greytext text-[32px] font-medium">
				ლისტინგის დამატება
			</h1>
			<form
				className="max-w-[790px] mx-auto flex flex-col gap-20  my-16"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col gap-2">
					<h1 className="medium-text">გარიგების ტიპი</h1>
					<div className="flex items-center gap-[84px]">
						<div className="flex items-center gap-2">
							<div className="inline-flex items-center">
								<label className="relative flex items-center cursor-pointer">
									<input
										type="radio"
										className="peer custom-radio"
										value={0}
										checked
										{...register("is_rental", {
											valueAsNumber: true,
										})}
									/>
									<span className="absolute bg-slate-800 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
								</label>
								<label className="ml-2  cursor-pointer small-text">
									იყიდება
								</label>
							</div>
						</div>
						<div className="inline-flex items-center">
							<label className="relative flex items-center cursor-pointer">
								<input
									type="radio"
									className="peer custom-radio"
									value={1}
									{...register("is_rental", {
										valueAsNumber: true,
									})}
								/>
								<span className="absolute bg-slate-800 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
							</label>
							<label className="ml-2  cursor-pointer small-text">
								ქირავდება
							</label>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">მდებარეობა</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomInput
							header={"მისამართი*"}
							label={
								errors.address
									? errors.address.message
									: "მინიმუმ ორი სიმბოლო"
							}
							style={getInputStyle("address")}
							register={register("address")}
						/>
						<CustomInput
							header={"საფოსტო ინდექსი*"}
							label={
								errors.zip_code
									? errors.zip_code.message
									: "მხოლოდ რიცხვები"
							}
							style={getInputStyle("zip_code")}
							register={register("zip_code")}
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<CustomdropDown
							addAgent={false}
							header="რეგიონი"
							dropdownelemets={regions}
							value={selectedRegion}
							onChange={(value) => setValue("region_id", value)}
						/>
						<CustomdropDown
							addAgent={false}
							header="ქალაქი"
							dropdownelemets={filteredCities}
							value={selectedCity}
							onChange={(value) => setValue("city_id", value)}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">ბინის დეტალები</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomInput
							header={"ფასი"}
							label={
								errors.price
									? errors.price.message
									: "მხოლოდ რიცხვები"
							}
							style={getInputStyle("price")}
							register={register("price", {
								valueAsNumber: true,
							})}
							type="number"
						/>

						<CustomInput
							header={"ფართობი"}
							label={
								errors.area
									? errors.area.message
									: "მხოლოდ რიცხვები"
							}
							style={getInputStyle("area")}
							register={register("area", { valueAsNumber: true })}
						/>
						<CustomInput
							header={"ოთახების რაოდენობა"}
							label={
								errors.bedrooms
									? errors.bedrooms.message
									: "მხოლოდ რიცხვები"
							}
							style={getInputStyle("bedrooms")}
							register={register("bedrooms", {
								valueAsNumber: true,
							})}
						/>
					</div>

					<CustomTextArea
						header="აღწერა"
						label={
							errors.description
								? errors.description.message
								: "მინიმუმ ხუთი სიტყვა"
						}
						style={getInputStyle("description")}
						register={register("description")}
					/>
					<DropZoneInput
						header="ატვირთეთ ფოტო*"
						style={getInputStyle("image")}
						onFileChange={handleFileChange}
					/>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">აგენტი</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomdropDown
							addAgent={true}
							header="აირჩიე"
							dropdownelemets={agents}
							value={selectedAgent}
							onChange={(value) => setValue("agent_id", value)}
						/>
					</div>
				</div>
				<div className="flex items-center justify-end gap-4 mt-">
					<CustomButtom title={"გაუქმება"} fill={false} />
					<CustomButtom
						title={"დაამატე ლისტინგი"}
						fill
						type="submit"
					/>
				</div>
				{errors.image && <div>{errors.image.message}</div>}
			</form>
		</div>
	);
};

export default page;
