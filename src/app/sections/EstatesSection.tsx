"use client";

import React, { useEffect, useState } from "react";
import Card from "../components/custom/Card";
import { makeRequest } from "../utils/axios";
import { IRealEstateCard } from "../interface/IRealEstateCard";
import Link from "next/link";

const EstatesSection = () => {
	const [realEstates, setRealEstates] = useState<IRealEstateCard[]>();

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

	return (
		<div className="container my-8 grid grid-cols-4 gap-5">
			{realEstates &&
				realEstates.map((item) => (
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
	);
};

export default EstatesSection;
