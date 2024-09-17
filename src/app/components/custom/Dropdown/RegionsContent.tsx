import React, { useEffect, useState, useContext } from "react";
import DropdownRadioItem from "./DropdownRadioItem";
import CustomButtom from "../CustomButtom";
import { fetchRegions } from "@/app/utls/fetchDatas";
import { FilterContext } from "@/app/context/FilterContext";

type TypeRegions = {
	id: number;
	name: string;
};

const DropdownContent = () => {
	const [regions, setRegions] = useState<TypeRegions[]>([]);

	const fetchData = async () => {
		const response = await fetchRegions();
		setRegions(response);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const { selectedRegions, setSelectedRegions } = useContext(FilterContext);

	const handleSelectRegion = (regionName: string) => {
		if (selectedRegions.includes(regionName)) {
			setSelectedRegions(
				selectedRegions.filter((region) => region !== regionName)
			);
		} else {
			setSelectedRegions([...selectedRegions, regionName]);
		}
	};

	return (
		<div className="absolute min-w-[731px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1 className="font-bold text-darktext">რეგიონების მიხედვით</h1>
			<div className="grid grid-cols-3 gap-4">
				{regions.map((region) => (
					<DropdownRadioItem
						title={region.name}
						key={region.id}
						isSelected={selectedRegions.includes(region.name)}
						onSelect={() => handleSelectRegion(region.name)}
					/>
				))}
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom
					title={"არჩევა"}
					fill
					onClick={() => {
						console.log(selectedRegions);
					}}
				/>
			</div>
		</div>
	);
};

export default DropdownContent;
