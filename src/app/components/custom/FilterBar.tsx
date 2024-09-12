import FilterBarItem from "./FilterBarItem";

const FilterBar = () => {
	return (
		<div className="flex items-center gap-2">
			<FilterBarItem />
			<FilterBarItem />
			<FilterBarItem />
			<FilterBarItem />
			<FilterBarItem />
			<p className="text-darktext text-[14px] font-medium text-center cursor-pointer">
				გასუფთავება
			</p>
		</div>
	);
};

export default FilterBar;
