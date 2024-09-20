import React, { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IDropZoneInputProps {
	header: string;
	style?: "default" | "error" | "success";
	onFileChange?: (file: File | null) => void; // Handle null file cases
	label?: string | null;
	register?: UseFormRegisterReturn;
}

const DropZoneInput: React.FC<IDropZoneInputProps> = ({
	header,
	style = "default",
	onFileChange,
	register,
	label,
}) => {
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const previewUrl = URL.createObjectURL(file);
			setImagePreview(previewUrl);
			if (onFileChange) {
				onFileChange(file); // Pass the file upwards if a handler is provided
			}
		} else {
			setImagePreview(null);
			if (onFileChange) {
				onFileChange(null); // Handle null if the file is deselected
			}
		}

		// Call the `register`'s `onChange` if it's provided
		if (register?.onChange) {
			register.onChange(event);
		}
	};

	useEffect(() => {
		console.log("Preview changed", imagePreview);
	}, [imagePreview]);

	const styleClasses = {
		default: "!border-[#808A93]",
		error: "!border-colorerror",
		success: "!border-colorsuccess",
	};

	return (
		<div className="flex flex-col gap-2">
			<h1 className="medium-text">{header}</h1>
			<label htmlFor="dropzone-file">
				<div
					className={`h-[157px] flex justify-center items-center border-[1px] border-dashed cursor-pointer ${styleClasses[style]}`}
				>
					{imagePreview ? (
						<img
							src={imagePreview}
							alt="Uploaded Preview"
							className="h-full object-cover"
						/>
					) : (
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
					)}

					<input
						id="dropzone-file"
						type="file"
						className="hidden"
						{...(register
							? { ...register, onChange: undefined }
							: {})}
						onChange={handleFileChange}
					/>
				</div>
			</label>

			{label && (
				<span
					className={`small-text ${
						style === "default"
							? "text-darktext"
							: style === "error"
							? "!text-colorerror"
							: "!text-colorsuccess"
					}`}
				>
					{label}
				</span>
			)}
		</div>
	);
};

export default DropZoneInput;
