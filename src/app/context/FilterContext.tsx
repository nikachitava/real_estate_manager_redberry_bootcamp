"use client";

import { createContext, ReactNode, useState } from "react";

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
