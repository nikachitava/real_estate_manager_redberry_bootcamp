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
			<h1 className="medium-text">{header}</h1>

			<textarea
				className={`h-[157px] outline-none p-[10px] rounded-[6px] border-[1px] resize-none 
                    ${style === "default" && "!border-[#808A93]"}
					${style === "error" && "!border-colorerror"} 
					${style === "success" && "!border-colorsuccess"}`}
				{...register}
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

export default CustomTextArea;
