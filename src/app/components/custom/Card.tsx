import React from "react";
import Image from "next/image";

const Card = () => {
	return (
		<div className="relative w-[384px]">
			<div className="absolute text-white font-medium text-[14px] bg-[#02152680] top-5 left-5 p-[6px] rounded-[15px]">
				ქირავდება
			</div>
			<Image
				src="/images/cover.svg"
				width={384}
				height={307}
				alt="cover"
				className="cover-fit"
			/>
			<div className="flex flex-col gap-5 bg-white border-x-[1px] border-b-[1px] border-[#DBDBDB] rounded-b-[14px] px-[25px] py-[22px]">
				<div className="flex flex-col gap-[6px]">
					<h1 className="font-bold text-darktext text-2xl">
						80 000L
					</h1>
					<div className="flex items-center gap-2">
						<Image
							src="/images/icons/location.svg"
							width={24}
							height={24}
							alt="cover"
						/>
						<span className="text-greytext">
							თბილისი, ი. ჭავჭავაძის 53
						</span>
					</div>
				</div>
				<div className="flex items-center gap-8">
					<div className="flex items-center gap-2">
						<Image
							src="/images/icons/bed.svg"
							width={24}
							height={24}
							alt="cover"
						/>
						<span className="text-greytext">2</span>
					</div>
					<div className="flex items-center gap-2">
						<Image
							src="/images/icons/area.svg"
							width={24}
							height={24}
							alt="cover"
						/>
						<span className="text-greytext">55მ&#178;</span>
					</div>
					<div className="flex items-center gap-2">
						<Image
							src="/images/icons/post.svg"
							width={24}
							height={24}
							alt="cover"
						/>
						<span className="text-greytext">4400</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
