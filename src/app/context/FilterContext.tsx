"use client";

import { createContext, PropsWithChildren, useState } from "react";

type TypeFilterContext = {
	selectedRegions: string[];
	minPrice: string;
	maxPrice: string;
	minArea: string;
	maxArea: string;
	bedrooms: string;
	setSelectedRegions: (region: string[]) => void;
	setMinPrice: (price: string) => void;
	setMaxPrice: (price: string) => void;
	setMinArea: (area: string) => void;
	setMaxArea: (area: string) => void;
	setBedrooms: (bedrooms: string) => void;
};

const CONTEXT_DEFAULT_VALUE: TypeFilterContext = {
	selectedRegions: [],
	minPrice: "",
	maxPrice: "",
	minArea: "",
	maxArea: "",
	bedrooms: "",
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
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [minArea, setMinArea] = useState("");
	const [maxArea, setMaxArea] = useState("");
	const [bedrooms, setBedrooms] = useState("");

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
