import React from "react";

interface ICustomButtomProps {
	title: string;
	onClick?: () => void;
	otherStyles?: string;
	icon?: JSX.Element;
	fill: boolean;
}

const CustomButtom: React.FC<ICustomButtomProps> = ({
	title,
	onClick,
	otherStyles,
	icon,
	fill,
}) => {
	return (
		<div
			className={`${
				fill
					? "bg-orange text-white hover:bg-[#DF3014]"
					: "border-orange text-orange hover:bg-orange hover:text-white"
			} border-[1px] border-orange py-[10px] px-4 rounded-[10px] cursor-pointer font-medium ${otherStyles}`}
			onClick={onClick}
		>
			{icon}
			{title}
		</div>
	);
};

export default CustomButtom;
