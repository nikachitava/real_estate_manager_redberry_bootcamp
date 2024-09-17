import React from "react";

interface IDropdownItem {
	title: string;
	isSelected: boolean;
	onSelect: () => void;
}

const DropdownRadioItem: React.FC<IDropdownItem> = ({
	title,
	isSelected,
	onSelect,
}) => {
	return (
		<div className="flex items-center gap-2">
			<input
				type="checkbox"
				className="w-5 h-5 accent-[#45A849] rounded-[2px] "
				checked={isSelected}
				onChange={onSelect}
			/>
			<span className="text-lighttext text-[14px]">{title}</span>
		</div>
	);
};

export default DropdownRadioItem;
