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
						<div className="relative p-[19px]">
							<img
								src={imagePreview}
								alt="Uploaded Preview"
								className="w-[92px] h-[82px] object-cover"
							/>
							<div className="absolute right-[10px] bottom-[10px]">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="12"
										cy="12"
										r="11.5"
										fill="white"
										stroke="#021526"
									/>
									<path
										d="M6.75 8.5H7.91667H17.25"
										stroke="#021526"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.0834 8.50033V16.667C16.0834 16.9764 15.9605 17.2732 15.7417 17.492C15.5229 17.7107 15.2262 17.8337 14.9167 17.8337H9.08341C8.774 17.8337 8.47725 17.7107 8.25846 17.492C8.03966 17.2732 7.91675 16.9764 7.91675 16.667V8.50033M9.66675 8.50033V7.33366C9.66675 7.02424 9.78966 6.72749 10.0085 6.5087C10.2272 6.28991 10.524 6.16699 10.8334 6.16699H13.1667C13.4762 6.16699 13.7729 6.28991 13.9917 6.5087C14.2105 6.72749 14.3334 7.02424 14.3334 7.33366V8.50033"
										stroke="#021526"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M10.8333 11.417V14.917"
										stroke="#021526"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M13.1667 11.417V14.917"
										stroke="#021526"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
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
