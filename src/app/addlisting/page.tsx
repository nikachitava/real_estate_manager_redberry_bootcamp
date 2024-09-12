import React from "react";
import CustomInput from "../components/custom/CustomInput";
import { IoCheckmarkSharp } from "react-icons/io5";

const page = () => {
	return (
		<div className="container">
			<h1 className="text-center text-greytext text-[32px] font-medium">
				ლისტინგის დამატება
			</h1>
			<form className="max-w-[790px] mx-auto flex flex-col gap-20 bg-red-200 my-16">
				<div className="flex flex-col gap-2">
					<h1 className="medium-text">გარიგების ტიპი</h1>
					<div className="flex items-center gap-[84px]">
						<div className="flex items-center gap-2">
							<div className="inline-flex items-center">
								<label className="relative flex items-center cursor-pointer">
									<input
										name="rental_status"
										type="radio"
										className="peer custom-radio"
									/>
									<span className="absolute bg-slate-800 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
								</label>
								<label className="ml-2 text-slate-600 cursor-pointer text-sm">
									HTML
								</label>
							</div>
						</div>
						<div className="inline-flex items-center">
							<label className="relative flex items-center cursor-pointer">
								<input
									name="rental_status"
									type="radio"
									className="peer custom-radio"
								/>
								<span className="absolute bg-slate-800 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
							</label>
							<label className="ml-2 text-slate-600 cursor-pointer text-sm">
								HTML
							</label>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">მდებარეობა*</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomInput
							header={"მისამართი*"}
							label={"მინიმუმ ორი სიმბოლო"}
						/>
						<CustomInput
							header={"საფოსტო ინდექსი"}
							label={"მხოლოდ რიცხვები"}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">ბინის დეტალები</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomInput
							header={"ფასი"}
							label={"მხოლოდ რიცხვები"}
						/>
						<CustomInput
							header={"ფართობი"}
							label={"მხოლოდ რიცხვები"}
						/>
						<CustomInput
							header={"ფართობი"}
							label={"მხოლოდ რიცხვები"}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<h1 className="medium-text">აღწერა*</h1>

						<textarea className="h-[157px] outline-none p-[10px] rounded-[6px] border-[1px] border-[#808A93] resize-none" />
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
					<div className="">
						<h1 className="medium-text">ატვირთეთ ფოტო*</h1>
						<label htmlFor="dropzone-file">
							<div className="h-[157px] flex justify-center items-center border-[1px] border-dashed border-[#808A93] cursor-pointer">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										stroke="#2D3648"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12 8V16"
										stroke="#2D3648"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8 12H16"
										stroke="#2D3648"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<input
									id="dropzone-file"
									type="file"
									className="hidden"
								/>
							</div>
						</label>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="medium-text">აგენტი</h1>

					<div className="grid grid-cols-2 gap-4">
						<CustomInput
							header={"აირჩიე"}
							label={"მხოლოდ რიცხვები"}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default page;
