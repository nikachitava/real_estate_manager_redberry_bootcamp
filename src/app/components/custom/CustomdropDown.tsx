"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import AddAgentItem from "./Dropdown/AddAgentItem";

interface ICustomdropDownProps {
	addAgent: boolean;
	header: string;
	dropdownelemets?: { id: number; name: string }[] | null;
	onChange?: (value: number) => void;
	value: number;
	style?: "default" | "error" | "success";
	otherStyles?: string;
}

const CustomdropDown: React.FC<ICustomdropDownProps> = ({
	addAgent,
	header,
	dropdownelemets,
	onChange,
	style = "default",
	value,
	otherStyles,
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

	const [currentOption, setCurrentOption] = useState<string>("აირჩიე");

	const [currentStyle, setCurrentStyle] = useState<
		"default" | "error" | "success"
	>(style);

	useEffect(() => {
		const selectedElement = dropdownelemets?.find(
			(elem) => elem.id === value
		);

		if (selectedElement) {
			setCurrentOption(selectedElement.name);
			setCurrentStyle("success");
		} else {
			setCurrentOption("აირჩიე");
			setCurrentStyle("default");
		}
	}, [value, dropdownelemets]);

	useEffect(() => {
		setCurrentStyle(style);
	}, [style]);

	const chooseOption = (id: number, name: string) => {
		setCurrentOption(name);
		onChange && onChange(id);
		setCurrentStyle("success");
	};

	return (
		<div
			className={`relative flex flex-col gap-2 cursor-pointer ${otherStyles}`}
			onClick={toggleDropDown}
			ref={dropdownRef}
		>
			<p className="medium-text text-greytext">{header}</p>
			<div
				className={`flex justify-between items-center p-[10px] border-[1px] rounded-[6px]  ${
					currentStyle === "default" &&
					"!border-[#808A93] text-greytext"
				}
					${currentStyle === "error" && "!border-colorerror text-colorerror"} 
					${currentStyle === "success" && "!border-colorsuccess text-colorsuccess"}`}
			>
				{currentOption}
				{isDropDownOpen ? (
					<RiArrowDropUpLine size={24} />
				) : (
					<RiArrowDropDownLine size={24} />
				)}
			</div>

			{isDropDownOpen && (
				<div className="absolute w-full max-h-[168px] bg-white border-[1px] border-[#808A93] rounded-b-[6px] z-10 top-16 overflow-y-scroll scrollbar-hide">
					{addAgent && <AddAgentItem />}
					{dropdownelemets &&
						dropdownelemets.map((element) => (
							<div
								className="p-[10px] border-b-[1px] border-[#808A93] small-text"
								key={element.id}
								onClick={() =>
									chooseOption(element.id, element.name)
								}
							>
								{element.name}
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default CustomdropDown;
