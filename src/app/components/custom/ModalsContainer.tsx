"use client";

import { ModalContext } from "@/app/context/ModalProvider";
import { useContext } from "react";
import Modal from "./Modal";
import AddAgentModal from "./AddAgentModal";
import ModalConfirmation from "./ModalConfirmation";

const ModalsContainer = () => {
	const {
		isAddagentModalOpen,
		handleCloseAddAgentModal,
		isConfirmModalOpen,
		handleCloseConfirmModal,
	} = useContext(ModalContext);
	return (
		<>
			<Modal
				isOpen={isAddagentModalOpen}
				onClose={handleCloseAddAgentModal}
				closeButton={false}
			>
				<AddAgentModal onClose={handleCloseAddAgentModal} />
			</Modal>
			<Modal
				isOpen={isConfirmModalOpen}
				onClose={handleCloseConfirmModal}
				closeButton={false}
			>
				<ModalConfirmation onClose={handleCloseConfirmModal} />
			</Modal>
		</>
	);
};

export default ModalsContainer;
