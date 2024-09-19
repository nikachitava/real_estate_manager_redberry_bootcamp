import React from "react";
import Image from "next/image";

type FilterBar = {
	header: string;
	onRemove: () => void;
};

const FilterBarItem: React.FC<FilterBar> = ({ header, onRemove }) => {
	return (
		<div className="flex items-center gap-2 rounded-[43px] border-[1px] border-[#DBDBDB] py-[6px] px-[10px]">
			<span className="text-darktext text-[14px]">{header}</span>
			<Image
				src="/images/icons/close.svg"
				width={14}
				height={14}
				alt="close"
				className="cursor-pointer"
				onClick={onRemove}
			/>
		</div>
	);
};

export default FilterBarItem;
