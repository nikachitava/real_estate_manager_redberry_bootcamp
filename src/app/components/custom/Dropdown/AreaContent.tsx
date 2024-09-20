"use client";

import React, { useContext, useState } from "react";
import CustomButtom from "../CustomButtom";
import { FilterContext } from "@/app/context/FilterContext";

const AreaContent = () => {
	const { handleMinMaxArea } = useContext(FilterContext);

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

	const handleAreaSelection = () => {
		if (!error) {
			handleMinMaxArea(
				minValue === "" ? 0 : minValue,
				maxValue === "" ? 0 : maxValue
			);
		}
	};

	const fixedAreas = [50, 100, 150, 200, 250];

	const setMinArea = (value: number) => {
		setMinValue(value);
		setError("");
	};

	const setMaxArea = (value: number) => {
		setMaxValue(value);
		setError("");
	};

	return (
		<div className="absolute min-w-[382px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1>ფასების მიხედვით</h1>
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
					<span>მ&#178;</span>
				</div>
				<div
					className={`flex justify-between items-center w-[155px] border-[1px] p-[10px] rounded-md ${
						error ? "border-[#F93B1D]" : "border-[#808A93]"
					}`}
				>
					<input
						placeholder="დან"
						className="border-none outline-none w-[80%]"
						type="number"
						value={maxValue}
						onChange={handleMaxChange}
					/>
					<span>მ&#178;</span>
				</div>
			</div>
			{error && <p className="text-[#F93B1D] text-[12px]">{error}</p>}
			<div className="flex justify-between items-center">
				<div className="flex-1">
					<h1 className="font-bold text-darktext">მინ. მ&#178;</h1>
					<div className="flex flex-col gap-2 mt-4">
						{fixedAreas.map((area) => (
							<p
								key={area}
								className="text-lighttext text-[14px] cursor-pointer"
								onClick={() => setMinArea(area)}
							>
								{area.toLocaleString()} მ&#178;
							</p>
						))}
					</div>
				</div>
				<div className="flex-1">
					<h1 className="font-bold text-darktext">მაქს. მ&#178;</h1>
					<div className="flex flex-col gap-2 mt-4">
						{fixedAreas.map((area) => (
							<p
								key={area}
								className="text-lighttext text-[14px] cursor-pointer"
								onClick={() => setMaxArea(area)}
							>
								{area.toLocaleString()} მ&#178;
							</p>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom
					title={"არჩევა"}
					fill
					onClick={handleAreaSelection}
				/>
			</div>
		</div>
	);
};

export default AreaContent;
