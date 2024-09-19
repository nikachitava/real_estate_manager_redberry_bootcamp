"use client";

import { FilterContext } from "@/app/context/FilterContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Navbar = () => {
	const { selectedRegions, minPrice, maxPrice, minArea, maxArea, bedrooms } =
		useContext(FilterContext);

	return (
		<div className="container mx-auto py-9 ">
			<h1>
				{selectedRegions}, {minPrice}, {maxPrice}, {minArea}, {maxArea},{" "}
				{bedrooms}{" "}
			</h1>
			<Link href="/">
				<Image
					src="/images/logo.svg"
					width={150}
					height={24}
					alt="logo"
				/>
			</Link>
		</div>
	);
};

export default Navbar;
