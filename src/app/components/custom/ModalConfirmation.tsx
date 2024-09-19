import React from "react";
import CustomButtom from "./CustomButtom";

const ModalConfirmation = () => {
	return (
		<div>
			<p>ნამდვილად გსურთ პოსტის წაშლა?</p>
			<div>
				<CustomButtom title={"გაუქმება"} fill={false} />
				<CustomButtom title={"დადასტურება"} fill={false} />
			</div>
		</div>
	);
};

export default ModalConfirmation;
