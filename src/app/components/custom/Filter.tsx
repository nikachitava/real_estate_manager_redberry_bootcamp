import React, { useContext } from "react";
import DropDown from "./Dropdown/DropDown";
import RegionsContent from "./Dropdown/RegionsContent";
import AreaContent from "./Dropdown/AreaContent";
import PricesContent from "./Dropdown/PricesContent";
import RoomsNumberContent from "./Dropdown/RoomsNumberContent";
import CustomButtom from "./CustomButtom";
import { IoMdAdd } from "react-icons/io";
import FilterBar from "./FilterBar";
import Link from "next/link";
import { ModalContext } from "@/app/context/ModalProvider";

const Filter = () => {
	const { handleModal } = useContext(ModalContext);

	return (
		<div className="container">
			<div className="flex justify-between items-center">
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
					<Link href="/addlisting">
						<CustomButtom
							title={"ლისტინგის დამატება"}
							icon={<IoMdAdd size={24} />}
							fill
							otherStyles="flex gap-2 items-center"
						/>
					</Link>
					<CustomButtom
						title={"აგენტის დამატება"}
						icon={<IoMdAdd size={24} />}
						fill={false}
						otherStyles="flex gap-2 items-center"
						onClick={handleModal}
					/>
				</div>
			</div>
			<div className="mt-4">
				<FilterBar />
			</div>
		</div>
	);
};

export default Filter;
