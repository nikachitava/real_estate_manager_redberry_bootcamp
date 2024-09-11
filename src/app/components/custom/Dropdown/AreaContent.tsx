import Image from "next/image";
import React from "react";

const AreaContent = () => {
	return (
		<div className="absolute min-w-[382px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white">
			<h1>ფასების მიხედვით</h1>
			<div className="flex items-center gap-[15px]">
				<div className="flex justify-between items-center w-[155px] border-2 border-black p-[10px]">
					<input
						placeholder="დან"
						className="border-none outline-none w-[80%]"
					/>
					<Image
						src="/images/icons/gel-currency-icon.svg"
						width={8}
						height={14}
						alt="gel-currency"
					/>
				</div>
				<div className="flex justify-between items-center w-[155px] border-2 border-black p-[10px]">
					<input
						placeholder="დან"
						className="border-none outline-none w-[80%]"
					/>
					<Image
						src="/images/icons/gel-currency-icon.svg"
						width={8}
						height={14}
						alt="gel-currency"
					/>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex-1">
					<h1>მინ. მ&#178;</h1>
					<p>50, 000მ&#178;</p>
					<p>100, 000მ&#178;</p>
					<p>150, 000მ&#178;</p>
					<p>200, 000მ&#178;</p>
					<p>250, 000მ&#178;</p>
				</div>
				<div className="flex-1">
					<h1>მაქს. მ&#178;</h1>
					<p>50, 000მ&#178;</p>
					<p>100, 000მ&#178;</p>
					<p>150, 000მ&#178;</p>
					<p>200, 000მ&#178;</p>
					<p>250, 000მ&#178;</p>
				</div>
			</div>
		</div>
	);
};

export default AreaContent;
