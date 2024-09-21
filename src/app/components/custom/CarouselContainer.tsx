"use client";

import { IRealEstateCard } from "@/app/interface/IRealEstateCard";
import { makeRequest } from "@/app/utils/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "next/navigation";

const CarouselContainer = () => {
	const [realEstates, setRealEstates] = useState<IRealEstateCard[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const [filteredSimilarEstates, setFilteredSimilarEstates] = useState<
		IRealEstateCard[]
	>([]);

	const fetchRealEstates = async () => {
		try {
			const response = await makeRequest.get("/real-estates");
			setRealEstates(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	const params = useParams();
	const currentEstateID = Number(params.id);

	// if (selectedRegions.length > 0) {
	// 	filtered = filtered.filter((estate) =>
	// 		selectedRegions.includes(estate.city.region.name)
	// 	);
	// }

	// if(estate.city.region_id == realEstates[currentEstateID].city.region_id )

	const filterSimilarEstates = () => {
		if (realEstates.length > 0) {
			const currentEstate = realEstates.find(
				(estate) => estate.id === currentEstateID
			);

			if (currentEstate) {
				const currentRegionId = currentEstate.city.region_id;

				const filtered = realEstates.filter(
					(estate) =>
						estate.city.region_id === currentRegionId &&
						estate.id !== currentEstateID
				);

				setFilteredSimilarEstates(filtered);
				console.log("filteredSimilarEstates: ", filtered);
			}
		}
	};

	useEffect(() => {
		fetchRealEstates();
	}, []);

	useEffect(() => {
		if (realEstates.length > 0) {
			filterSimilarEstates();
		}
	}, [realEstates, currentEstateID]);

	const cardsPerPage = 4;

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => {
			if (
				prevIndex >=
				Math.floor(filteredSimilarEstates.length / cardsPerPage)
			) {
				return 0;
			} else {
				return prevIndex + 1;
			}
		});
	};

	console.log(
		"asdasd: ",
		Math.floor(filteredSimilarEstates.length / cardsPerPage)
	);

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex <= 0) {
				return Math.ceil(filteredSimilarEstates.length / cardsPerPage);
			} else {
				return prevIndex - 1;
			}
		});
	};

	return (
		<div className="mt-[53px] mb-10 relative">
			<h1 className="font-medium text-[32px] text-darktext mb-[52px]">
				ბინები მსგავს ლოკაციაზე{" "}
			</h1>

			<div className="relative overflow-hidden">
				<div
					className="flex gap-4 transition-transform ease-in-out duration-500"
					style={{
						transform: `translateX(-${currentIndex * 100}%)`,
					}}
				>
					{filteredSimilarEstates.length === 0 ? (
						<p className=" text-[#021526CC] text-[20px]">
							მსგავს ლოკაციაზე ბინები არ იძებნება
						</p>
					) : (
						filteredSimilarEstates.map((item) => (
							<Link href={`/listing/${item.id}`} key={item.id}>
								<div className="min-w-[calc(20%-16px)]">
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
								</div>
							</Link>
						))
					)}
				</div>
			</div>
			{filteredSimilarEstates.length !== 0 && (
				<>
					<div
						className="absolute left-[-35px] top-1/2 cursor-pointer"
						onClick={prevSlide}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8839 19.6339C10.3957 20.122 9.60427 20.122 9.11612 19.6339L0.366117 10.8839C-0.12204 10.3957 -0.12204 9.60427 0.366117 9.11612L9.11612 0.366117C9.60427 -0.12204 10.3957 -0.12204 10.8839 0.366117C11.372 0.854271 11.372 1.64573 10.8839 2.13388L4.26777 8.75L18.75 8.75C19.4404 8.75 20 9.30964 20 10C20 10.6904 19.4404 11.25 18.75 11.25L4.26777 11.25L10.8839 17.8661C11.372 18.3543 11.372 19.1457 10.8839 19.6339Z"
								fill="#021526"
							/>
						</svg>
					</div>

					<div
						className="absolute right-[-35px] top-1/2 cursor-pointer"
						onClick={nextSlide}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.11612 0.366117C9.60427 -0.122039 10.3957 -0.122039 10.8839 0.366117L19.6339 9.11612C20.122 9.60427 20.122 10.3957 19.6339 10.8839L10.8839 19.6339C10.3957 20.122 9.60427 20.122 9.11612 19.6339C8.62796 19.1457 8.62796 18.3543 9.11612 17.8661L15.7322 11.25H1.25C0.559644 11.25 0 10.6904 0 10C0 9.30964 0.559644 8.75 1.25 8.75H15.7322L9.11612 2.13388C8.62796 1.64573 8.62796 0.854272 9.11612 0.366117Z"
								fill="#021526"
							/>
						</svg>
					</div>
				</>
			)}
		</div>
	);
};

export default CarouselContainer;
