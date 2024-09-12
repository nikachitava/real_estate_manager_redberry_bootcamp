import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface ICustomInputProps {
	header: string;
	label: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({ header, label }) => {
	return (
		<div className="flex flex-col gap-2">
			<p className="medium-text text-greytext">{header}</p>
			<input className="p-[10px] border-[1px] border-[#808A93] rounded-[6px] outline-none" />
			<div className="flex items-center gap-2">
				<IoCheckmarkSharp
					size={20}
					className="font-bold text-greytext"
				/>
				<span className="small-text">{label}</span>
			</div>
		</div>
	);
};

export default CustomInput;
