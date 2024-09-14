import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { IoCheckmarkSharp } from "react-icons/io5";

interface ICustomTextAreaProps {
	header: string;
	label: string;
	register: UseFormRegisterReturn;
	style?: "default" | "error" | "success";
}

const CustomTextArea: React.FC<ICustomTextAreaProps> = ({
	header,
	label,
	register,
	style = "default",
}) => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="medium-text">აღწერა*</h1>

			<textarea
				className={`h-[157px] outline-none p-[10px] rounded-[6px] border-[1px] border-[#808A93] resize-none 
				`}
				{...register}
			/>
			<div className="flex items-center gap-2">
				<IoCheckmarkSharp
					size={20}
					className="font-bold text-greytext"
				/>
				<label className="small-text">მინიმუმ ხუთი სიტყვა</label>
			</div>
		</div>
	);
};

export default CustomTextArea;
