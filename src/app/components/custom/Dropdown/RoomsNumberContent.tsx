"use client";

import React, { useContext, useState } from "react";
import CustomButtom from "../CustomButtom";
import { FilterContext } from "@/app/context/FilterContext";

const RoomsNumberContent = () => {
	const { handleBedrooms } = useContext(FilterContext);

	const [roomsValue, setRoomsValue] = useState(0);

	return (
		<div className="absolute min-w-[282px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1>საფასო კატეგორია</h1>
			<div className="grid grid-cols-3 gap-4">
				<input
					className="outline-none w-[80%] border-2 border-[#808A93] rounded-md p-[10px]"
					type="number"
					value={roomsValue}
					onChange={(e: any) => {
						setRoomsValue(e.target.value);
					}}
				/>
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom
					title={"არჩევა"}
					fill
					onClick={() => handleBedrooms(roomsValue)}
				/>
			</div>
		</div>
	);
};

export default RoomsNumberContent;
