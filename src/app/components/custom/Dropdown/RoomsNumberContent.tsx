import React, { useContext } from "react";
import CustomButtom from "../CustomButtom";
import { FilterContext } from "@/app/context/FilterContext";

const RoomsNumberContent = () => {
	const { bedrooms, setBedrooms } = useContext(FilterContext);

	const onSubmit = () => {
		console.log(bedrooms);
	};

	return (
		<div className="absolute min-w-[282px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1>საფასო კატეგორია</h1>
			<div className="grid grid-cols-3 gap-4">
				<input
					className="outline-none w-[80%] border-2 border-[#808A93] rounded-md p-[10px]"
					type="number"
					value={bedrooms}
					onChange={(e: any) => {
						setBedrooms(e.target.value);
					}}
				/>
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom title={"არჩევა"} fill onClick={onSubmit} />
			</div>
		</div>
	);
};

export default RoomsNumberContent;
