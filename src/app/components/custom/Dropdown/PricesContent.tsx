"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import CustomButtom from "../CustomButtom";
import { FilterContext } from "@/app/context/FilterContext";

const PricesContent = () => {
	const { handleMinMaxPrice } = useContext(FilterContext);
	``;

	const [minValue, setMinValue] = useState<number | "">("");
	const [maxValue, setMaxValue] = useState<number | "">("");
	const [error, setError] = useState("");

	const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value === "" ? "" : Number(e.target.value);
		setMinValue(value);
		if (value !== "" && typeof maxValue === "number" && value > maxValue) {
			setError("შეიყვანეთ ვალიდური მონაცემები.");
		} else {
			setError("");
		}
	};

	const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value === "" ? "" : Number(e.target.value);
		setMaxValue(value);
		if (value !== "" && typeof minValue === "number" && minValue > value) {
			setError("შეიყვანეთ ვალიდური მონაცემები.");
		} else {
			setError("");
		}
	};

	const handlePriceSelection = () => {
		if (!error) {
			handleMinMaxPrice(
				minValue === "" ? 0 : minValue,
				maxValue === "" ? 0 : maxValue
			);
		}
	};

	const fixedPrices = [50000, 100000, 150000, 200000, 250000];

	const setMinPrice = (value: number) => {
		setMinValue(value);
		setError("");
	};

	const setMaxPrice = (value: number) => {
		setMaxValue(value);
		setError("");
	};

	return (
		<div className="absolute min-w-[382px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1 className="text-darktext font-bold">ფასის მიხედვით</h1>
			<div className="flex items-center gap-[15px]">
				<div
					className={`flex justify-between items-center w-[155px] border-[1px] p-[10px] rounded-md ${
						error ? "border-[#F93B1D]" : "border-[#808A93]"
					}`}
				>
					<input
						placeholder="დან"
						className="border-none outline-none w-[80%]"
						type="number"
						value={minValue}
						onChange={handleMinChange}
					/>
					<Image
						src="/images/icons/gel-currency-icon.svg"
						width={8}
						height={14}
						alt="gel-currency"
					/>
				</div>
				<div
					className={`flex justify-between items-center w-[155px] border-[1px] p-[10px] rounded-md ${
						error ? "border-[#F93B1D]" : "border-[#808A93]"
					}`}
				>
					<input
						placeholder="მდე"
						className="border-none outline-none w-[80%]"
						type="number"
						value={maxValue}
						onChange={handleMaxChange}
					/>
					<Image
						src="/images/icons/gel-currency-icon.svg"
						width={8}
						height={14}
						alt="gel-currency"
					/>
				</div>
			</div>
			{error && <p className="text-[#F93B1D] text-[12px]">{error}</p>}
			<div className="flex justify-between items-center">
				<div className="flex-1">
					<h1 className="font-bold text-darktext">მინ. ფასი</h1>
					<div className="flex flex-col gap-2 mt-4">
						{fixedPrices.map((price) => (
							<p
								key={price}
								className="text-lighttext text-[14px] cursor-pointer"
								onClick={() => setMinPrice(price)}
							>
								{price.toLocaleString()}$
							</p>
						))}
					</div>
				</div>
				<div className="flex-1">
					<h1 className="font-bold text-darktext">მაქს. ფასი</h1>
					<div className="flex flex-col gap-2 mt-4">
						{fixedPrices.map((price) => (
							<p
								key={price}
								className="text-lighttext text-[14px] cursor-pointer"
								onClick={() => setMaxPrice(price)}
							>
								{price.toLocaleString()}$
							</p>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom
					title={"არჩევა"}
					fill
					onClick={handlePriceSelection}
				/>
			</div>
		</div>
	);
};

export default PricesContent;
