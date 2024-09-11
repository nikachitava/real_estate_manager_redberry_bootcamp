import Image from "next/image";
import React from "react";

const AreaContent = () => {
	return (
		<div className="absolute min-w-[382px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white">
			<h1>ფასების მიხედვით</h1>
			<div className="flex items-center gap-[15px]">
				<div className="flex justify-between items-center w-[155px] border-2 border-[#808A93] p-[10px] rounded-md">
					<input
						placeholder="დან"
						className="border-none outline-none w-[80%]"
					/>
					<span>მ&#178;</span>
				</div>
				<div className="flex justify-between items-center w-[155px] border-2 border-[#808A93] p-[10px] rounded-md">
					<input
						placeholder="დან"
						className="border-none outline-none w-[80%]"
					/>
					<span>მ&#178;</span>
				</div>
			</div>

			<div className="flex justify-between items-center">
				<div className="flex-1">
					<h1 className="font-bold text-darktext">მინ. ფასი</h1>
					<p className="text-lighttext text-[14px]">50, 000მ&#178;</p>
					<p className="text-lighttext text-[14px]">
						100, 000მ&#178;
					</p>
					<p className="text-lighttext text-[14px]">
						150, 000მ&#178;
					</p>
					<p className="text-lighttext text-[14px]">
						200, 000მ&#178;
					</p>
					<p className="text-lighttext text-[14px]">
						250, 000მ&#178;
					</p>
				</div>
				<div className="flex-1">
					<h1 className="font-bold text-darktext">მაქს. ფასი</h1>
					<p className="text-lighttext text-[14px]">50, 000მ&#178;</p>
					<p className="text-lighttext text-[14px]">
						100, 000მ&#178;
					</p>
					<p className="text-lighttext text-[14px]">
						150, 000მ&#178;
					</p>
					<p className="text-lighttext text-[14px]">
						200, 000მ&#178;
					</p>
					<p className="text-lighttext text-[14px]">
						250, 000მ&#178;
					</p>
				</div>
			</div>
		</div>
	);
};

export default AreaContent;
