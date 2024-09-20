"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type TypeFilterContext = {
	selectedRegions: string[];
	setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
	minPrice: null | number;
	maxPrice: null | number;
	minArea: null | number;
	maxArea: null | number;
	bedrooms: null | number;

	setPriceValuesNull: () => void;
	setAreaValuesNull: () => void;
	setBedroomValueNull: () => void;

	cleanBar: () => void;

	handleMinMaxPrice: (min: number, max: number) => void;
	handleMinMaxArea: (min: number, max: number) => void;
	handleBedrooms: (number: number) => void;
};

const CONTEXT_DEFAULT_VALUE: TypeFilterContext = {
	selectedRegions: [],
	setSelectedRegions: () => {},
	minPrice: null,
	maxPrice: null,
	minArea: null,
	maxArea: null,
	bedrooms: null,

	setPriceValuesNull: () => {},
	setAreaValuesNull: () => {},
	setBedroomValueNull: () => {},

	cleanBar: () => {},

	handleMinMaxPrice: () => {},
	handleMinMaxArea: () => {},
	handleBedrooms: () => {},
};

export const FilterContext = createContext<TypeFilterContext>(
	CONTEXT_DEFAULT_VALUE
);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [selectedRegions, setSelectedRegions] = useState<string[]>(() => {
		return JSON.parse(sessionStorage.getItem("selectedRegions") || "[]");
	});
	const [minPrice, setMinPrice] = useState<null | number>(() => {
		return JSON.parse(sessionStorage.getItem("minPrice") || "null");
	});
	const [maxPrice, setMaxPrice] = useState<null | number>(() => {
		return JSON.parse(sessionStorage.getItem("maxPrice") || "null");
	});
	const [minArea, setMinArea] = useState<null | number>(() => {
		return JSON.parse(sessionStorage.getItem("minArea") || "null");
	});
	const [maxArea, setMaxArea] = useState<null | number>(() => {
		return JSON.parse(sessionStorage.getItem("maxArea") || "null");
	});
	const [bedrooms, setBedrooms] = useState<null | number>(() => {
		return JSON.parse(sessionStorage.getItem("bedrooms") || "null");
	});

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

	const setPriceValuesNull = () => {
		setMinPrice(null), setMaxPrice(null);
	};

	const setAreaValuesNull = () => {
		setMinArea(null), setMaxArea(null);
	};

	const setBedroomValueNull = () => {
		setBedrooms(null);
	};

	const cleanBar = () => {
		setSelectedRegions([]);
		setPriceValuesNull();
		setAreaValuesNull();
		setBedroomValueNull();
	};

	useEffect(() => {
		sessionStorage.setItem(
			"selectedRegions",
			JSON.stringify(selectedRegions)
		);
		sessionStorage.setItem("minPrice", JSON.stringify(minPrice));
		sessionStorage.setItem("maxPrice", JSON.stringify(maxPrice));
		sessionStorage.setItem("minArea", JSON.stringify(minArea));
		sessionStorage.setItem("maxArea", JSON.stringify(maxArea));
		sessionStorage.setItem("bedrooms", JSON.stringify(bedrooms));
	}, [selectedRegions, minPrice, maxPrice, minArea, maxArea, bedrooms]);

	return (
		<FilterContext.Provider
			value={{
				selectedRegions,
				minPrice,
				maxPrice,
				minArea,
				maxArea,
				bedrooms,
				setPriceValuesNull,
				setAreaValuesNull,
				setBedroomValueNull,
				setSelectedRegions,
				cleanBar,
				handleMinMaxPrice,
				handleMinMaxArea,
				handleBedrooms,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
