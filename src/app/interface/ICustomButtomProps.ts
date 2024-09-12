export interface ICustomButtomProps {
	title: string;
	onClick?: () => void;
	otherStyles?: string;
	icon?: JSX.Element;
	fill: boolean;
}