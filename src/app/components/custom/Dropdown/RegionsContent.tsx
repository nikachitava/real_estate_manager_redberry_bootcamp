import React, { useEffect, useState } from "react";
import DropdownRadioItem from "./DropdownRadioItem";
import CustomButtom from "../CustomButtom";
import { fetchRegions } from "@/app/utls/fetchDatas";

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

	console.log(regions);

	return (
		<div className="absolute min-w-[731px] flex flex-col gap-6 mt-[10px] border-[1px] border-[#DBDBDB] p-6 bg-white z-10">
			<h1 className="font-bold text-darktext">რეგიონების მიხედვით</h1>
			<div className="grid grid-cols-3 gap-4">
				{regions.map((region) => (
					<DropdownRadioItem title={region.name} key={region.id} />
				))}
			</div>
			<div className="flex justify-end items-center">
				<CustomButtom title={"არჩევა"} fill />
			</div>
		</div>
	);
};

export default DropdownContent;
