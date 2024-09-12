import React from "react";
import Image from "next/image";

const FilterBarItem = () => {
	return (
		<div className="flex items-center gap-2 rounded-[43px] border-[1px] border-[#DBDBDB] py-[6px] px-[10px]">
			<span className="text-darktext text-[14px]">თბილისი</span>
			<Image
				src="/images/icons/close.svg"
				width={14}
				height={14}
				alt="close"
				className="cursor-pointer"
			/>
		</div>
	);
};

export default FilterBarItem;
