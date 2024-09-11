import React from "react";

interface IDropdownItem {
	title: string;
}

const DropdownRadioItem: React.FC<IDropdownItem> = ({ title }) => {
	return (
		<div className="flex items-center gap-2">
			<input
				type="checkbox"
				className="w-5 h-5 accent-[#45A849] rounded-[2px] "
			/>
			<span className="text-lighttext text-[14px]">{title}</span>
		</div>
	);
};

export default DropdownRadioItem;
