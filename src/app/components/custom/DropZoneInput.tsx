import React from "react";

const DropZoneInput = () => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="medium-text">ატვირთეთ ფოტო*</h1>
			<label htmlFor="dropzone-file">
				<div className="h-[157px] flex justify-center items-center border-[1px] border-dashed border-[#808A93] cursor-pointer">
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
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 8V16"
							stroke="#2D3648"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 12H16"
							stroke="#2D3648"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<input id="dropzone-file" type="file" className="hidden" />
				</div>
			</label>
		</div>
	);
};

export default DropZoneInput;
