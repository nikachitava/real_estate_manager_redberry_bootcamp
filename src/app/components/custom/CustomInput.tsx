import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IoCheckmarkSharp } from "react-icons/io5";

interface ICustomInputProps {
	header: string;
	label: string;
	register: UseFormRegister<any>;
	name: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
	header,
	label,
	register,
	name,
}) => {
	return (
		<div className="flex flex-col gap-2">
			<p className="medium-text text-greytext">{header}</p>
			<input
				className="p-[10px] border-[1px] border-[#808A93] rounded-[6px] outline-none"
				{...register(name)}
			/>
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
