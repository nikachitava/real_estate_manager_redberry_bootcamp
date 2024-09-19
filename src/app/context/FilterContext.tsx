"use client";

import { createContext, PropsWithChildren, useState } from "react";

type TypeFilterContext = {
	selectedRegions: string[];
	minPrice: null | number;
	maxPrice: null | number;
	minArea: null | number;
	maxArea: null | number;
	bedrooms: null | number;
	setSelectedRegions: (region: string[]) => void;
	handleMinMaxPrice: (min: number, max: number) => void;
	handleMinMaxArea: (min: number, max: number) => void;
	handleBedrooms: (number: number) => void;
};

const CONTEXT_DEFAULT_VALUE: TypeFilterContext = {
	selectedRegions: [],
	minPrice: null,
	maxPrice: null,
	minArea: null,
	maxArea: null,
	bedrooms: null,
	setSelectedRegions: () => {},
	handleMinMaxPrice: (min: number, max: number) => {},
	handleMinMaxArea: (min: number, max: number) => {},
	handleBedrooms: (number: number) => {},
};

export const FilterContext = createContext<TypeFilterContext>(
	CONTEXT_DEFAULT_VALUE
);

export const FilterProvider = ({ children }: PropsWithChildren) => {
	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [minPrice, setMinPrice] = useState<null | number>(null);
	const [maxPrice, setMaxPrice] = useState<null | number>(null);
	const [minArea, setMinArea] = useState<null | number>(null);
	const [maxArea, setMaxArea] = useState<null | number>(null);
	const [bedrooms, setBedrooms] = useState<null | number>(null);

	const handleMinMaxPrice = (min: number, max: number) => {
		setMinPrice(min);
		setMaxPrice(max);
	};

	const handleMinMaxArea = (min: number, max: number) => {
		setMinArea(min);
		setMaxArea(max);
	};

	const handleBedrooms = (number: number) => {
		setBedrooms(number);
	};

	return (
		<FilterContext.Provider
			value={{
				selectedRegions,
				minPrice,
				maxPrice,
				minArea,
				maxArea,
				bedrooms,
				setSelectedRegions,
				handleMinMaxPrice,
				handleMinMaxArea,
				handleBedrooms,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
