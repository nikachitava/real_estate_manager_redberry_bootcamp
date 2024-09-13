export interface ICustomButtomProps {
	title: string;
	onClick?: () => void;
	otherStyles?: string;
	icon?: JSX.Element;
	fill: boolean;
	type?: "button" | "submit" | "reset"; 
}