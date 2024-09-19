"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import CustomButtom from "../CustomButtom";
import { FilterContext } from "@/app/context/FilterContext";

const PricesContent = () => {
	const { handleMinMaxPrice } = useContext(FilterContext);

	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(0);

	return (
		<div className="absolute min-w-[382px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1 className="text-darktext font-bold">ფასის მიხედვით</h1>
			<div className="flex items-center gap-[15px]">
				<div className="flex justify-between items-center w-[155px] border-2 border-[#808A93] p-[10px] rounded-md">
					<input
						placeholder="დან"
						className="border-none outline-none w-[80%]"
						type="number"
						value={minValue}
						onChange={(e: any) => {
							setMinValue(e.target.value);
						}}
					/>
					<Image
						src="/images/icons/gel-currency-icon.svg"
						width={8}
						height={14}
						alt="gel-currency"
					/>
				</div>
				<div className="flex justify-between items-center w-[155px] border-2 border-[#808A93] p-[10px] rounded-md">
					<input
						placeholder="მდე"
						className="border-none outline-none w-[80%]"
						type="number"
						value={maxValue}
						onChange={(e: any) => {
							setMaxValue(e.target.value);
						}}
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
					<h1 className="font-bold text-darktext">მინ. ფასი</h1>
					<div className="flex flex-col gap- mt-4">
						<p className="text-lighttext text-[14px]">50, 000$</p>
						<p className="text-lighttext text-[14px]">100, 000$</p>
						<p className="text-lighttext text-[14px]">150, 000$</p>
						<p className="text-lighttext text-[14px]">200, 000$</p>
						<p className="text-lighttext text-[14px]">250, 000$</p>
					</div>
				</div>
				<div className="flex-1">
					<h1 className="font-bold text-darktext">მაქს. ფასი</h1>
					<div className="flex flex-col gap- mt-4">
						<p className="text-lighttext text-[14px]">50, 000$</p>
						<p className="text-lighttext text-[14px]">100, 000$</p>
						<p className="text-lighttext text-[14px]">150, 000$</p>
						<p className="text-lighttext text-[14px]">200, 000$</p>
						<p className="text-lighttext text-[14px]">250, 000$</p>
					</div>
				</div>
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom
					title={"არჩევა"}
					fill
					onClick={() => handleMinMaxPrice(minValue, maxValue)}
				/>
			</div>
		</div>
	);
};

export default PricesContent;
