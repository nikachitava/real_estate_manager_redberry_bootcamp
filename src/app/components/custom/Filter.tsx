import React from "react";
import DropDown from "./Dropdown/DropDown";
import RegionsContent from "./Dropdown/RegionsContent";
import AreaContent from "./Dropdown/AreaContent";
import PricesContent from "./Dropdown/PricesContent";
import RoomsNumberContent from "./Dropdown/RoomsNumberContent";

const Filter = () => {
	return (
		<div className="container">
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
		</div>
	);
};

export default Filter;
