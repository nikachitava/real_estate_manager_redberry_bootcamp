import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { IoCheckmarkSharp } from "react-icons/io5";

interface ICustomInputProps {
	header: string;
	label: string | undefined;
	register?: UseFormRegisterReturn;
	style?: "default" | "error" | "success";
	type?: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
	header,
	label,
	register,
	style = "default",
	type,
}) => {
	return (
		<div className="flex flex-col gap-2">
			<p className="medium-text text-greytext">{header}</p>
			<input
				className={`p-[10px] border-[1px]  rounded-[6px] outline-none appearance-none
					${style === "default" && "!border-[#808A93]"}
					${style === "error" && "!border-colorerror"} 
					${style === "success" && "!border-colorsuccess"}`}
				{...register}
				type={type}
			/>
			<div className="flex items-center gap-2">
				<IoCheckmarkSharp
					size={20}
					className={`font-bold text-greytext 
						${style === "default" && "!text-greytext"}
						${style === "error" && "!text-colorerror"} 
						${style === "success" && "!text-colorsuccess"}`}
				/>
				<span
					className={`small-text 
						${style === "default" && "text-darktext"}
						${style === "error" && "!text-colorerror"} 
						${style === "success" && "!text-colorsuccess"}`}
				>
					{label}
				</span>
			</div>
		</div>
	);
};

export default CustomInput;
