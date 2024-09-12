"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import AddAgentItem from "./Dropdown/AddAgentItem";

interface ICustomdropDownProps {
	addAgent: boolean;
	header: string;
}

const CustomdropDown: React.FC<ICustomdropDownProps> = ({
	addAgent,
	header,
}) => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const toggleDropDown = () => {
		setIsDropDownOpen((isDropDownOpen) => !isDropDownOpen);
	};

	const dropdownRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropDownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			className="relative flex flex-col gap-2 cursor-pointer"
			onClick={toggleDropDown}
			ref={dropdownRef}
		>
			<p className="medium-text text-greytext">{header}</p>
			<div className="flex justify-between items-center p-[10px] border-[1px] border-[#808A93] rounded-[6px]">
				asd
				{isDropDownOpen ? (
					<RiArrowDropUpLine scale={24} />
				) : (
					<RiArrowDropDownLine size={24} />
				)}
			</div>

			{isDropDownOpen && (
				<div className="absolute w-full max-h-[168px] bg-white border-[1px] border-[#808A93] rounded-b-[6px] z-10 top-16 overflow-y-scroll scrollbar-hide">
					{addAgent && <AddAgentItem />}
					<div className="p-[10px] border-b-[1px] border-[#808A93] small-text">
						იმერეთი
					</div>
					<div className="p-[10px] border-b-[1px] border-[#808A93] small-text">
						იმერეთი
					</div>
					<div className="p-[10px] border-b-[1px] border-[#808A93] small-text">
						იმერეთი
					</div>
					<div className="p-[10px] border-b-[1px] border-[#808A93] small-text">
						იმერეთი
					</div>
					<div className="p-[10px] border-b-[1px] border-[#808A93] small-text">
						იმერეთი
					</div>
					<div className="p-[10px] border-b-[1px] border-[#808A93] small-text">
						იმერეთი
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomdropDown;
