"use client";

import { createContext, PropsWithChildren, useState } from "react";

type TypeFilterContext = {
	selectedRegions: string[];
	minPrice: number;
	maxPrice: number;
	minArea: number;
	maxArea: number;
	bedrooms: number;
	setSelectedRegions: (region: string[]) => void;
	setMinPrice: (price: number) => void;
	setMaxPrice: (price: number) => void;
	setMinArea: (area: number) => void;
	setMaxArea: (area: number) => void;
	setBedrooms: (bedrooms: number) => void;
};

const CONTEXT_DEFAULT_VALUE: TypeFilterContext = {
	selectedRegions: [],
	minPrice: 0,
	maxPrice: 0,
	minArea: 0,
	maxArea: 0,
	bedrooms: 0,
	setSelectedRegions: () => {},
	setMinPrice: () => {},
	setMaxPrice: () => {},
	setMinArea: () => {},
	setMaxArea: () => {},
	setBedrooms: () => {},
};

export const FilterContext = createContext<TypeFilterContext>(
	CONTEXT_DEFAULT_VALUE
);

export const FilterProvider = ({ children }: PropsWithChildren) => {
	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [minArea, setMinArea] = useState(0);
	const [maxArea, setMaxArea] = useState(0);
	const [bedrooms, setBedrooms] = useState(0);

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
				setMinPrice,
				setMaxPrice,
				setMinArea,
				setMaxArea,
				setBedrooms,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
