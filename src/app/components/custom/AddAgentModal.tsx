import React, { useContext } from "react";
import CustomInput from "./CustomInput";
import DropZoneInput from "./DropZoneInput";
import CustomButtom from "./CustomButtom";

interface IAddAgentModalProps {
	onClose?: () => void;
}

const AddAgentModal: React.FC<IAddAgentModalProps> = ({ onClose }) => {
	return (
		<div className="min-w-[1009px] p-[105px]">
			<h1 className="medium-text text-[32px] text-center mb-[61px]">
				აგენტის დამატება
			</h1>
			<div className="flex flex-col gap-7">
				<div className="grid grid-cols-2 gap-[31px]">
					<CustomInput
						header={"სახელი*"}
						label={"მინიმუმ ორი სიმბოლო"}
					/>
					<CustomInput
						header={"გვარი"}
						label={"მინიმუმ ორი სიმბოლო"}
					/>
				</div>
				<div className="grid grid-cols-2 gap-[31px]">
					<CustomInput
						header={"ელ ფოსტა*"}
						label={"გამოიყენეთ @redberry.ge ფოსტა"}
					/>
					<CustomInput
						header={"ტელეფონის ნომერი"}
						label={"მხოლოდ რიცხვები"}
					/>
				</div>
				<DropZoneInput header={"ატვირთეთ ფოტო*"} />
				<div className="flex items-center justify-end gap-2 mt-[66px]">
					<CustomButtom
						title={"გაუქმება"}
						fill={false}
						onClick={onClose}
					/>
					<CustomButtom title={"დაამატე აგენტი"} fill />
				</div>
			</div>
		</div>
	);
};

export default AddAgentModal;
