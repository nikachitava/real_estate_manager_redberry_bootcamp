import React from "react";

interface IDropZoneInputProps {
	header: string;
	style?: "default" | "error" | "success";
	onFileChange?: (file: File) => void;
	label?: string | null;
}

const DropZoneInput: React.FC<IDropZoneInputProps> = ({
	header,
	style = "default",
	onFileChange,
	label,
}) => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file && onFileChange) {
			onFileChange(file);
		}
	};
	return (
		<div className="flex flex-col gap-2">
			<h1 className="medium-text">{header}</h1>
			<label htmlFor="dropzone-file">
				<div
					className={`h-[157px] flex justify-center items-center border-[1px] border-dashed  cursor-pointer ${
						style === "default" && "!border-[#808A93]"
					}
					${style === "error" && "!border-colorerror"} 
					${style === "success" && "!border-colorsuccess"}`}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
							stroke="#2D3648"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 8V16"
							stroke="#2D3648"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8 12H16"
							stroke="#2D3648"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<input
						id="dropzone-file"
						type="file"
						className="hidden"
						onChange={handleFileChange}
					/>
				</div>
			</label>

			<span
				className={`small-text 
						${style === "default" && "text-darktext"}
						${style === "error" && "!text-colorerror"} 
						${style === "success" && "!text-colorsuccess"}`}
			>
				{label}
			</span>
		</div>
	);
};

export default DropZoneInput;
