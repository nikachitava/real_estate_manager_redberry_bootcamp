import React from "react";
import DropDown from "./Dropdown/DropDown";
import RegionsContent from "./Dropdown/RegionsContent";
import AreaContent from "./Dropdown/AreaContent";
import PricesContent from "./Dropdown/PricesContent";
import RoomsNumberContent from "./Dropdown/RoomsNumberContent";
import CustomButtom from "./CustomButtom";
import { IoMdAdd } from "react-icons/io";

const Filter = () => {
	return (
		<div className="container flex justify-between items-center">
			<div className="flex items-center gap-6">
				<DropDown title="რეგიონი">
					<RegionsContent />
				</DropDown>
				<DropDown title="საფასო კატეგორია">
					<PricesContent />
				</DropDown>
				<DropDown title="ფართობი">
					<AreaContent />
				</DropDown>
				<DropDown title="საძინებლების რაოდენობა">
					<RoomsNumberContent />
				</DropDown>
			</div>
			<div className="flex items-center gap-4">
				<CustomButtom
					title={"ლისტინგის დამატება"}
					icon={<IoMdAdd size={24} />}
					fill
					otherStyles="flex gap-2 items-center"
				/>
				<CustomButtom
					title={"აგენტის დამატება"}
					icon={<IoMdAdd size={24} />}
					fill={false}
					otherStyles="flex gap-2 items-center"
				/>
			</div>
		</div>
	);
};

export default Filter;
