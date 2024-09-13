"use client";

import React from "react";
import CustomInput from "../components/custom/CustomInput";
import { IoCheckmarkSharp } from "react-icons/io5";
import CustomButtom from "../components/custom/CustomButtom";
import CustomdropDown from "../components/custom/CustomdropDown";
import DropZoneInput from "../components/custom/DropZoneInput";
import { useForm } from "react-hook-form";

type FormFields = {
	address: string;
	image: string;
	region_id: number;
	description: string;
	city_id: number;
	zip_code: string;
	price: number;
	area: number;
	bedrooms: number;
	is_rental: number; // +
	agent_id: number;
};

const page = () => {
	const { register } = useForm<FormFields>();

	return (
		<div className="container">
			<h1 className="text-center text-greytext text-[32px] font-medium">
				ლისტინგის დამატება
			</h1>
			<form className="max-w-[790px] mx-auto flex flex-col gap-20  my-16">
				<div className="flex flex-col gap-2">
					<h1 className="medium-text">გარიგების ტიპი</h1>
					<div className="flex items-center gap-[84px]">
						<div className="flex items-center gap-2">
							<div className="inline-flex items-center">
								<label className="relative flex items-center cursor-pointer">
									<input
										type="radio"
										className="peer custom-radio"
										checked
										{...register("is_rental")}
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
									{...register("is_rental")}
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
							label={"მინიმუმ ორი სიმბოლო"}
							{...register("address")}
						/>
						<CustomInput
							header={"საფოსტო ინდექსი*"}
							label={"მხოლოდ რიცხვები"}
							{...register("zip_code")}
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<CustomdropDown
							addAgent={false}
							header="რეგიონი"
							{...register("region_id")}
						/>
						<CustomdropDown
							addAgent={false}
							header="ქალაქი"
							{...register("city_id")}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">ბინის დეტალები</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomInput
							header={"ფასი"}
							label={"მხოლოდ რიცხვები"}
							{...register("price")}
						/>
						<CustomInput
							header={"ფართობი"}
							label={"მხოლოდ რიცხვები"}
							{...register("area")}
						/>
						<CustomInput
							header={"ოთახების რაოდენობა"}
							label={"მხოლოდ რიცხვები"}
							{...register("bedrooms")}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<h1 className="medium-text">აღწერა*</h1>

						<textarea
							className="h-[157px] outline-none p-[10px] rounded-[6px] border-[1px] border-[#808A93] resize-none"
							{...register("description")}
						/>
						<div className="flex items-center gap-2">
							<IoCheckmarkSharp
								size={20}
								className="font-bold text-greytext"
							/>
							<label className="small-text">
								მინიმუმ ხუთი სიტყვა
							</label>
						</div>
					</div>
					<DropZoneInput
						header="ატვირთეთ ფოტო*"
						{...register("image")}
					/>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">აგენტი</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomdropDown
							addAgent={true}
							header="აირჩიე"
							{...register("agent_id")}
						/>
					</div>
				</div>
				<div className="flex items-center justify-end gap-4 mt-">
					<CustomButtom title={"გაუქმება"} fill={false} />
					<CustomButtom title={"დაამატე ლისტინგი"} fill />
				</div>
			</form>
		</div>
	);
};

export default page;
