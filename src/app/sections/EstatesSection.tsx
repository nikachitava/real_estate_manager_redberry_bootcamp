"use client";

import React, { useContext, useEffect, useState } from "react";
import Card from "../components/custom/Card";
import { makeRequest } from "../utils/axios";
import { IRealEstateCard } from "../interface/IRealEstateCard";
import Link from "next/link";
import { FilterContext } from "../context/FilterContext";

const EstatesSection = () => {
	const [realEstates, setRealEstates] = useState<IRealEstateCard[]>([]);
	const [filteredEstates, setFilteredEstates] = useState<IRealEstateCard[]>(
		[]
	);

	const fetchRealEstates = async () => {
		try {
			const response = await makeRequest.get("/real-estates");
			setRealEstates(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchRealEstates();
	}, []);

	const { selectedRegions, minPrice, maxPrice, minArea, maxArea, bedrooms } =
		useContext(FilterContext);

	const filterEstates = () => {
		let filtered = realEstates;

		if (selectedRegions.length > 0) {
			filtered = filtered.filter((estate) =>
				selectedRegions.includes(estate.city.region.name)
			);
		}

		if (minPrice != null && maxPrice != null) {
			filtered = filtered.filter(
				(estate) => estate.price >= minPrice && estate.price <= maxPrice
			);
		}

		if (minArea != null && maxArea != null) {
			filtered = filtered.filter(
				(estate) => estate.area >= minArea && estate.area <= maxArea
			);
		}

		if (bedrooms != null && bedrooms > 0) {
			filtered = filtered.filter((estate) => estate.bedrooms == bedrooms);
		}

		setFilteredEstates(filtered);
	};

	useEffect(() => {
		filterEstates();
	}, [
		realEstates,
		selectedRegions,
		minPrice,
		maxPrice,
		minArea,
		maxArea,
		bedrooms,
	]);

	return (
		<div className="container my-8">
			{filteredEstates.length === 0 ? (
				<p className=" text-[#021526CC] text-[20px]">
					აღნიშნული მონაცემებით განცხადება არ იძებნება
				</p>
			) : (
				<div className="grid grid-cols-4 gap-5">
					{filteredEstates.map((item) => (
						<Link href={`/listing/${item.id}`} key={item.id}>
							<Card
								id={item.id}
								address={item.address}
								zip_code={item.zip_code}
								price={item.price}
								area={item.area}
								bedrooms={item.bedrooms}
								is_rental={item.is_rental}
								image={item.image}
								city_id={item.id}
								city={item.city}
							/>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default EstatesSection;
