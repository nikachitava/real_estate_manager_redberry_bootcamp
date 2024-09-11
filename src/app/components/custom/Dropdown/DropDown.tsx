"use client";

import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface IDropDownProps {
	children: React.ReactNode;
	title: string;
}

const DropDown: React.FC<IDropDownProps> = ({ children, title }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<div
				className={`flex items-center gap-1 px-[14px] py-[8px] cursor-pointer   ${
					isMenuOpen && "bg-[#f3f3f3] rounded-md"
				}`}
				onClick={toggleMenu}
			>
				<span className="font-bold">{title}</span>
				{isMenuOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
			</div>
			{isMenuOpen && <>{children}</>}
		</div>
	);
};

export default DropDown;
