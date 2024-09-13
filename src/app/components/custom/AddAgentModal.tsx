import CustomButtom from "./CustomButtom";
import CustomInput from "./CustomInput";
import DropZoneInput from "./DropZoneInput";

interface IModalProps {
	open: boolean;
	onClose: () => void;
}

const AddAgentModal: React.FC<IModalProps> = ({ open, onClose }) => {
	return (
		<div
			className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20 backdrop-blur-sm z-10" : "invisible"}
      `}
		>
			<div
				className={`min-w-[1009px] bg-white shadow-custom rounded-[1px] p-[105px] ${
					open ? "slide-down" : "scale-125 opacity-0"
				}`}
			>
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
					<DropZoneInput header={"ddddddddddddddddddddddqw!@"} />
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
		</div>
	);
};

export default AddAgentModal;
