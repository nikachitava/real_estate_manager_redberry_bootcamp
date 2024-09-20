import React from "react";
import CustomButtom from "./CustomButtom";

interface IModalConfirmationProps {
	onClose?: () => void;
	onSubmit?: () => void;
}

const ModalConfirmation: React.FC<IModalConfirmationProps> = ({
	onClose,
	onSubmit,
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-[35px] px-[178px] py-[58px]">
			<p className="text-lighttext text-xl">
				ნამდვილად გსურთ პოსტის წაშლა?
			</p>
			<div className="flex justify-between gap-[15px]">
				<CustomButtom
					title={"გაუქმება"}
					fill={false}
					onClick={onClose}
				/>
				<CustomButtom
					title={"დადასტურება"}
					fill={true}
					onClick={onSubmit}
				/>
			</div>
		</div>
	);
};

export default ModalConfirmation;
