import React from "react";

const RoomsNumberContent = () => {
	return (
		<div className="absolute min-w-[282px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1>საფასო კატეგორია</h1>
			<div className="grid grid-cols-3 gap-4">
				<div className="w-10 h-10 flex justify-center items-center rounded-md border-[1px] border-[#808A93] text-greytext cursor-pointer ">
					1
				</div>
				<div className="w-10 h-10 flex justify-center items-center rounded-md border-[1px] border-[#808A93] text-greytext cursor-pointer">
					2
				</div>
				<div className="w-10 h-10 flex justify-center items-center rounded-md border-[1px] border-[#808A93] text-greytext cursor-pointer">
					3
				</div>
				<div className="w-10 h-10 flex justify-center items-center rounded-md border-[1px] border-[#808A93] text-greytext cursor-pointer">
					4
				</div>
				<div className="w-10 h-10 flex justify-center items-center rounded-md border-[1px] border-[#808A93] text-greytext cursor-pointer">
					5
				</div>
			</div>
		</div>
	);
};

export default RoomsNumberContent;
