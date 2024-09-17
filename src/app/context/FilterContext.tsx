"use client";

import { createContext, PropsWithChildren, useState } from "react";

type TypeFilterContext = {
	selectedRegions: string[];
	minPrice: string;
	maxPrice: string;
	area: string;
	bedrooms: string;
	setSelectedRegions: (region: string[]) => void;
	setMinPrice: (price: string) => void;
	setMaxPrice: (price: string) => void;
	setArea: (area: string) => void;
	setBedrooms: (bedrooms: string) => void;
};

const CONTEXT_DEFAULT_VALUE: TypeFilterContext = {
	selectedRegions: [],
	minPrice: "",
	maxPrice: "",
	area: "",
	bedrooms: "",
	setSelectedRegions: () => {},
	setMinPrice: () => {},
	setMaxPrice: () => {},
	setArea: () => {},
	setBedrooms: () => {},
};

export const FilterContext = createContext<TypeFilterContext>(
	CONTEXT_DEFAULT_VALUE
);

export const FilterProvider = ({ children }: PropsWithChildren) => {
	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [area, setArea] = useState("");
	const [bedrooms, setBedrooms] = useState("");

	return (
		<FilterContext.Provider
			value={{
				selectedRegions,
				minPrice,
				maxPrice,
				area,
				bedrooms,
				setSelectedRegions,
				setMinPrice,
				setMaxPrice,
				setArea,
				setBedrooms,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
