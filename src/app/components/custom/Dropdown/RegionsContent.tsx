import React from "react";
import DropdownRadioItem from "./DropdownRadioItem";

const DropdownContent = () => {
	return (
		<div className="absolute min-w-[731px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white">
			<h1 className="font-bold text-darktext">რეგიონების მიხედვით</h1>
			<div className="grid grid-cols-3 gap-4">
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი2" />
				<DropdownRadioItem title="თბილისი3" />
				<DropdownRadioItem title="თბილისი4" />
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი3" />
				<DropdownRadioItem title="თბილისი4" />
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი" />
				<DropdownRadioItem title="თბილისი" />
			</div>
		</div>
	);
};

export default DropdownContent;
