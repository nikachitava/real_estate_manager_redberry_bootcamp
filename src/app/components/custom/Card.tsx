import React from "react";
import Image from "next/image";
import { IRealEstateCard } from "@/app/interface/IRealEstateCard";

const Card: React.FC<IRealEstateCard> = ({
	address,
	zip_code,
	price,
	area,
	bedrooms,
	is_rental,
	image,
	city,
}) => {
	return (
		<div className="relative w-[384px] rounded-[14px]">
			<div className="absolute text-white font-medium text-[14px] bg-[#02152680] top-5 left-5 p-[6px] rounded-[15px]">
				{is_rental ? "ქირავდება" : "იყიდება"}
			</div>
			<Image
				src={image}
				width={384}
				height={307}
				alt="cover"
				className="object-fill rounded-t-[14px] h-[307px]"
			/>
			<div className="flex flex-col gap-5 bg-white border-x-[1px] border-b-[1px] border-[#DBDBDB] rounded-b-[14px] px-[25px] py-[22px]">
				<div className="flex flex-col gap-[6px]">
					<h1 className="font-bold text-darktext text-2xl">
						{price} ₾
					</h1>
					<div className="flex items-center gap-2">
						<Image
							src="/images/icons/location.svg"
							width={24}
							height={24}
							alt="cover"
						/>
						<span className="text-greytext">
							{`${city.name}, ${address}`}
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
						<span className="text-greytext">{bedrooms}</span>
					</div>
					<div className="flex items-center gap-2">
						<Image
							src="/images/icons/area.svg"
							width={24}
							height={24}
							alt="cover"
						/>
						<span className="text-greytext">{area} მ&#178;</span>
					</div>
					<div className="flex items-center gap-2">
						<Image
							src="/images/icons/post.svg"
							width={24}
							height={24}
							alt="cover"
						/>
						<span className="text-greytext">{zip_code}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
