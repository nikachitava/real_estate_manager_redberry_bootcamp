import { ModalContext } from "@/app/context/ModalProvider";
import { useContext } from "react";

const AddAgentItem = () => {
	const { handleAddAgentModal } = useContext(ModalContext);
	return (
		<div
			className="flex items-center gap-2 p-[10px] border-b-[1px] border-[#808A93]"
			onClick={handleAddAgentModal}
		>
			<svg
				width="20"
				height="20"
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
			<span className="small-text">დაამატე აგენტი</span>
		</div>
	);
};

export default AddAgentItem;
