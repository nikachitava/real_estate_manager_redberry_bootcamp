import React from "react";
import CustomButtom from "../CustomButtom";

const RoomsNumberContent = () => {
	return (
		<div className="absolute min-w-[282px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1>საფასო კატეგორია</h1>
			<div className="grid grid-cols-3 gap-4">
				{[1, 2, 3, 4, 5].map((item) => (
					<button
						className="w-10 h-10 flex justify-center items-center rounded-md border-[1px] border-[#808A93] text-greytext cursor-pointer "
						value={item}
					>
						{item}
					</button>
				))}
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom title={"არჩევა"} fill />
			</div>
		</div>
	);
};

export default RoomsNumberContent;
