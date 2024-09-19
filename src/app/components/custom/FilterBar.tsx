import { useContext } from "react";
import FilterBarItem from "./FilterBarItem";
import { FilterContext } from "@/app/context/FilterContext";

interface FilterBarProps {
	minPrice: number | null;
	maxPrice: number | null;
	minArea: number | null;
	maxArea: number | null;
	bedrooms: number | null;
	selectedRegions: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
	minPrice,
	maxPrice,
	minArea,
	maxArea,
	bedrooms,
	selectedRegions,
}) => {
	const {
		setSelectedRegions,
		setPriceValuesNull,
		setAreaValuesNull,
		setBedroomValueNull,
	} = useContext(FilterContext);

	const removePriceFilter = () => {
		setPriceValuesNull();
	};

	const removeAreaFilter = () => {
		setAreaValuesNull();
	};

	const removeBedroomsFilter = () => {
		setBedroomValueNull();
	};

	const removeRegionFilter = (region: string) => {
		setSelectedRegions((prev: string[]) =>
			prev.filter((r) => r !== region)
		);
	};

	return (
		<div className="flex items-center gap-2">
			{minPrice != null && maxPrice != null && (
				<FilterBarItem
					header={`${minPrice} - ${maxPrice}`}
					onRemove={removePriceFilter}
				/>
			)}

			{minArea != null && maxArea != null && (
				<FilterBarItem
					header={`${minArea} - ${maxArea} მ&#178;`}
					onRemove={removeAreaFilter}
				/>
			)}

			{bedrooms != null && bedrooms > 0 && (
				<FilterBarItem
					header={`${bedrooms} ოთახი`}
					onRemove={removeBedroomsFilter}
				/>
			)}

			{selectedRegions.map((region) => (
				<FilterBarItem
					key={region}
					header={region}
					onRemove={() => removeRegionFilter(region)}
				/>
			))}

			<p className="text-darktext text-[14px] font-medium text-center cursor-pointer">
				გასუფთავება
			</p>
		</div>
	);
};

export default FilterBar;
